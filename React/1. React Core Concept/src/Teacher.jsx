// 1 type:

export default function Teacher({id, name, isActive}) { // Here we are destructuring the props object to get the properties directly
    // console.log(id, name, isActive) // Checking the props in the console
    if(isActive){
        return (
            <p>Hi the teacher name is {name} and his id {id} and the active status is: True</p>
        )
    } else {
        return (
            <p>Hi the teacher name is {name} and his id {id} and the active status is: False</p>
        )
    }
}

// 2 type:

// export default function Teacher({id, name, isActive}) {
//     if(isActive){
//         return (<p>Hi the teacher name is {name} and his id {id} and the active status is: True</p>)
//     } 
//     return (<p>Hi the teacher name is {name} and his id {id} and the active status is: False</p>)
// }


// 3 type:

// export default function Teacher({id, name, isActive}) {
//     let listItem;
//     if(isActive === true){
//         listItem = <p>Hi the teacher name is {name} and his id {id} and the active status is: True</p>
//     } else {
//         listItem = <p>Hi the teacher name is {name} and his id {id} and the active status is: False</p>
//     }
//     return listItem
// }

// 4 type:

// export default function Teacher({id, name, isActive}) {
//     return isActive ? (<p>Hi the teacher name is {name} and his id {id} and the active status is: True</p>)
//             : (<p>Hi the teacher name is {name} and his id {id} and the active status is: False</p>)
// }


// 5 type:

// export default function Teacher({id, name, isActive}) {
//     return isActive && (<p>Hi the teacher name is {name} and his id {id} and the active status is: True</p>)
// }

// 6 type:

// export default function Teacher({id, name, isActive}) {
//     return isActive || (<p>Hi the teacher name is {name} and his id {id} and the active status is: False</p>)
// }