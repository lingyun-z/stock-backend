import { client } from '../config';
import { strConvertToStock } from '../util';

async function getStockNameByID(ID: string) {
  const timestamp = new Date().getTime();
  const result = await getSinaStockData(ID, timestamp);
  const stock = strConvertToStock(result.data);
  return stock.name;
}

function getSinaStockData(ID: string, timestamp: number) {
  const url = `https://hq.sinajs.cn/rn=${timestamp}&list=${ID}`;
  return client.get(url, {
    responseType: 'arraybuffer',
    transformResponse: (data) => {
      let array = new Uint8Array(data);
      var str = new TextDecoder('gbk').decode(array);
      return str;
    },
  });
}

export { getStockNameByID };
