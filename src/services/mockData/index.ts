const mockDataFiles = import.meta.globEager("../mockData/*.js");

const mockDataFilesList: any = {};
const fileName = [];

//取得所有資料檔案
for (const key in mockDataFiles) {
  mockDataFilesList[key.replace(/(\.\/mock\/|\.js)/g, "").slice(1)] =
    mockDataFiles[key];
  const keyName = key.substr(key.lastIndexOf("/") + 1).replace(".js", "");
  keyName !== "mockApi" ? fileName.push(keyName) : "";
}

const mockDataArray: any = [];

Object.entries(mockDataFilesList).forEach(([key]) => {
  let returnResult = {};
  if (key === "mockApi") return;
  returnResult = mockDataFilesList[key].default;
  mockDataArray.push(returnResult);
});

//合併資料
const mockDatas = mockDataArray.reduce(function (target: { [x: string]: any; }, key: any, index: string | number) {
  target[index] = key;
  return { ...target, ...target[index] };
}, {});

//物件去重
Object.keys(mockDatas).forEach(function (key) {
  if (!isNaN(Number(key))) {
    delete mockDatas[key];
  }
});

export default {
  mockDatas,
};
