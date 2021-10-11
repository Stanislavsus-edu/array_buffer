import getBuffer from '../getBuffer';
import ArrayBufferConverter from '../ArrayBufferConverter';

test('ArrayBufferConverter is ok', () => {
  const buf = new ArrayBufferConverter();
  buf.load(getBuffer());
  expect(buf.toString()).toEqual('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});