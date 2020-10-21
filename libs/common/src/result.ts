export class Result<T> {

    private constructor(private readonly success: boolean,
        readonly data?: T,
        readonly errorMessage?: string,
        readonly error?: Error) { }

    get isFailure(): boolean {
        return this.success === false
    }
    get isSuccess(): boolean {
        return this.success
    }

    getOrNull(): T | undefined {
        return this.data
    }

    getOrDefault(defaultValue: T): T {
        return this.data ? this.data : defaultValue
    }
    getOrThrow(): T {
        if (this.success && this.data) {
            return this.data
        } else {
            throw this.error
        }
    }

    failureOrUndefined(): Error | undefined {
        return this.error
    }

    map<R>(mapper: (value: T) => R): Result<R> {
        if (this.success) {
            return Result.success(mapper(this.data!!))
        } else {
            return (this as unknown) as Result<R>
        }
    }

    toString() {
        if (this.success) {
            return `Success(${this.data})`
        } else {
            return `Error(${this.errorMessage})`
        }
    }

    static success<T>(data: T): Result<T> {
        return new Result(true, data)
    }

    static failure<T>(errorMessage: string, error?: Error): Result<T> {
        return new Result<T>(false, undefined, errorMessage, error)
    }
}
