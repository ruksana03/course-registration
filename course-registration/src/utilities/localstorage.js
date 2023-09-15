const getStoredItem = ()=>{
    const storedCartString = localStorage.getItem('selectedCourses')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}

const saveItemToLs= item => {
    const itemStringified = JSON.stringify(item);
    localStorage.setItem('item',itemStringified)
}

const addToLs = course_name =>{
    const item = getStoredItem();
    item.push(course_name);
    saveItemToLs(item)
}

export {addToLs}