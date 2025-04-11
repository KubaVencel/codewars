/*

Take a picture !

Description:

You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking! you want to take a picture on your phone, but... your memory is full again! ok, time to sort through your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk drive full of pics, you must return an array with the 5 most recent ones PLUS the next one (same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"] 
// Should return ["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]

["2016.img1"]
// Should return ["2016.img1","2016.img2"]

*/

const reg = /(\d*)\.img(\d*)/;

function sortPhotos(pics){
  const sorted = pics.sort(compare).splice(-5);
  const last = sorted[sorted.length -1];
  sorted.push(last.replace(reg, (match, p1, p2) => `${p1}.img${(parseInt(p2) + 1)}`));
  return sorted;
}

function compare(a, b) {
  const regA = reg.exec(a);
  const regB = reg.exec(b);
  const year = parseInt(regA[1]) - parseInt(regB[1]);
  if (year == 0) {
    return parseInt(regA[2]) - parseInt(regB[2]);
  }
  return year;
}
