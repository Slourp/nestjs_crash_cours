import { AnotherMiddleware } from './another.middleware';

describe('AnotherMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddleware()).toBeDefined();
  });
});
