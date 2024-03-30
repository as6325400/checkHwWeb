import JSZip from 'jszip';


export const unzipFile = async (uploadedFile: File) : Promise<JSZip | null>=> {
  if (!uploadedFile) return null;

  try {
    const zip = new JSZip();
    const zipContent = await zip.loadAsync(uploadedFile);
    console.log('解壓縮完成');
    return zipContent;
  } catch (error) {
    console.error('解壓縮錯誤:', error);
    return null;
  }
};