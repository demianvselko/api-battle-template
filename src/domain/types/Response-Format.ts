export interface ResponseFormat<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
