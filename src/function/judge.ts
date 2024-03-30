import JSZip from 'jszip';

export const judgeFile = (unzipFile: JSZip) : Array<string> => {
  for(const file in unzipFile.files){
    console.log(file);
  }
  return []
};