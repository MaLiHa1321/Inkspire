const getStoreReadList = () =>{
    const storedListStr = localStorage.getItem('read-list');
    if(storedListStr){
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }

}

const addToreadList =(id) =>{
    const storeList = getStoreReadList();
    if(storeList.include(id)){
        console.log(id,'already exists in the read listid')
    }
    else{
        storeList.push(id);
        const storedListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storedListStr);
    }
}

export{addToreadList}