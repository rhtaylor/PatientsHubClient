export default function fetchObj(data){ 
    const POST_ULR = 'http://localhost/3000/providers/create.json'  
    
    const fetchOptions = {
        method: 'post',
            credentials: 'same-origin',
                headers: {
            'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } 
    debugger
    fetch(POST_ULR, {
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    } )
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err =>{ 
        debugger  
        console.log(err)
         })

}