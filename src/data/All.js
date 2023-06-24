import jsonData from "./japan-alphabet.json";

export const AllHiran = jsonData.Hirangana;
export const AllKata = jsonData.Katakana;

export const AllWriteHiran = [];
export const AllReadHiran = [];

export const AllWriteKata = [];
export const AllReadKata = [];

for(const write in AllHiran){
    AllWriteHiran.push(write);
    AllReadHiran.push(AllHiran[write])
}

for(const write in AllKata){
    AllWriteKata.push(write);
    AllReadKata.push(AllKata[write])
}


