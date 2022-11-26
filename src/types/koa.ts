export type TSuccess = (data:any, msg?:string) => void;
export type TError = (data:any, code:number, msg?:string,) => void;

declare module 'koa' {
  interface DefaultContext {
    success: TSuccess;
    error: TError;
  }
}
