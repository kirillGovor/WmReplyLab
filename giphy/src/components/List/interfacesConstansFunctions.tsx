//constants
export const API_KEY: string = "HfShRO0x4JtJ5f34VTuoYNn23Qrc9nuH";
export const MaxImagesLoading: number = 25;

//interfaces
export interface IFixed_height {
    url: string;
    width: string;
    height: string;
    size: string;
    mp4: string;
    mp4_size: string;
    webp: string;
    webp_size: string;
}

export interface Images {
    fixed_height: IFixed_height;
    '480w_still': {
        url: string;
        width: string;
        height: string;
    };
}

export interface IRootObject {
    data: IDataItem[],
    SavedImages: IDataItem[],
    find?: string,
    type?: string,
    updateFind?: boolean
}

export interface IDataItem {
    type: string;
    id: string;
    url: string;
    bitly_gif_url: string;
    bitly_url: string;
    username: string;
    rating: string;
    title: string;
    images: Images
}

export interface Ipathname {
    pathname: string;
}
export interface IProps {
    props: IPropsDataItem[];
}
export interface IPropsDataItem {
    location: Ipathname;
}

export interface ISearch {
    inputValue: string;
}

//functions
export async function search(recivedMessage: string, length: number, type: string | undefined) {
    if (recivedMessage === "") {
        recivedMessage = "trending"
    }
    const search = await fetch(`http://api.giphy.com/v1/${type}/search?q=${recivedMessage}&api_key=${API_KEY}&limit=${MaxImagesLoading + length}&offset=0`)
    const json = await search.json();
    if (json.error) {
        return await (json.error)
    } else {
        return (
            await json.data
        )
    }
}

export async function getApi(length: number, type: string) {
    const search = await fetch(`http://api.giphy.com/v1/${type}/trending?api_key=${API_KEY}&limit=${MaxImagesLoading + length}&offset=0`)
    const json = await search.json();
    if (json.error) {
        return await (json.error)
    } else {
        return (
            await json.data
        )
    }
}

export function onClick(item: IDataItem): void {
    let list = [item];
    let returnvalueJSON1: any = localStorage.getItem("Saved");
    if (returnvalueJSON1) {
        returnvalueJSON1 = JSON.parse(returnvalueJSON1);
        returnvalueJSON1 = returnvalueJSON1.concat(list)
    }
    else{
        returnvalueJSON1 = list
    }
    let valueJSON1 = JSON.stringify(returnvalueJSON1);
    localStorage.setItem("Saved", valueJSON1);
}

export function deleteWithLocalStorage(item: IDataItem[], SavedImages: IDataItem[], id: number) {
    let onlineList = item;
    onlineList = onlineList.filter((task: IDataItem, index: number) => index !== id);
    let list = SavedImages;
    let returnvalueJSON1: string | null = localStorage.getItem("Saved");
    if (returnvalueJSON1) {
        let listforAdd: IDataItem | ConcatArray<IDataItem> = JSON.parse(returnvalueJSON1);
        list = list.concat(listforAdd);
        list = list.filter((task: IDataItem, index: number) => index !== id);
    }
    else {
    }
    var valueJSON1 = JSON.stringify(list);
    localStorage.setItem("Saved", valueJSON1);
    return (onlineList)
}