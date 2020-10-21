class Feature<T> {
    constructor(readonly key: T,
        readonly value: string) { }
}

class Provider<F, T> {
    constructor(readonly name: string,
        readonly features: Feature<F>[],
        readonly priority: number,
        public enabled: boolean,
        readonly data: T) { }
}

class ProviderLocator<F, T> {
    constructor(private readonly providers: Provider<F, T>[]) { }

    // tslint:disable-next-line:no-any
    /**
     * 
     * @param evaluators 
     */
    findProviders(evaluators: FeatureEvaluator<F>[]): Provider<F, T>[] {
        const providers: Provider<F, T>[] = []
        const enabledProviders = this.providers.filter((p) => p.enabled)
        return enabledProviders.filter((provider) => evaluators.some((evaluator) => evaluator.provideFeature(provider.features)))
        for (const provider of enabledProviders) {
            for (const evaluator of evaluators) {
                if (evaluator.provideFeature(provider.features)) {
                    providers.push(provider)
                }
            }
        }
        providers.sort((p1, p2) => p1.priority - p2.priority)
        return providers
    }
}

interface FeatureEvaluator<T> {
    provideFeature(features: Feature<T>[]): boolean;
}


class ContainsFeatureEvaluator<T> implements FeatureEvaluator<T> {
    constructor(readonly featureKey: T, readonly featureValue: string) {

    }
    provideFeature(features: Feature<T>[]): boolean {
        for (const feature of features) {
            if (feature.key === this.featureKey && feature.value === this.featureValue) {
                return true;
            }
        }
        return false;
    }
}

type CountryFeatureEvaluator<T> = ContainsFeatureEvaluator<T>

enum GeolocationFeatures {
    COUNTRY
}

function locate() {
    const locator = new ProviderLocator<GeolocationFeatures, string>(
        [
            {
                name: 'KUSHKI',
                enabled: true,
                priority: 1,
                features: [{
                    key: GeolocationFeatures.COUNTRY,
                    value: 'CO'
                }],
                data: 'dddfdf'
            }
        ]
    )

    const providers = locator.findProviders(
        [new ContainsFeatureEvaluator(GeolocationFeatures.COUNTRY, 'CO')]
    )

}