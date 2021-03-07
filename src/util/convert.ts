import { SINA_STOCk_API, Stock } from '../types';

function strConvertToStock(result: string): Stock {
  const fields = result.split('"')[1].split(',');
  return {
    name: fields[SINA_STOCk_API.NAME],
    opening: Number(fields[SINA_STOCk_API.OPENING]),
    closing: Number(fields[SINA_STOCk_API.CLOSING]),
    highest: Number(fields[SINA_STOCk_API.HIGHEST]),
    lowest: Number(fields[SINA_STOCk_API.LOWEST]),
    volume: Number(fields[SINA_STOCk_API.VOLUME]),
  };
}
export { strConvertToStock };
