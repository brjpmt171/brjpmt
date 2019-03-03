 str=111110;

const savedata=()=>{
    const name=document.getElementById('name');
    const address=document.getElementById('address');
    const dob=document.getElementById('dob');
    const dlc=str+sessionStorage.length;
    var d = new Date();
    console.log(d);
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();

    var exp = new Date(year + 5, month, day);
    //exp = exp.split(' ')[0];
    //var exp=d.setDate(d.getDate() + 50)
    console.log(exp);

    if(name.value==''){
        alert('Name is Required!!');
    }
    else if(address.value==''){
        alert('Address is Required!!');
    }
    else if(dob.value==''){
        alert('Date of Birth is Required!!');
    }
    if(name.value!='' && address.value!='' && dob.value!=''){
        var userObj={
            name:name.value,
            address:address.value,
            dob:dob.value,
            dlc:dlc,
            exp:exp
        };
        sessionStorage.setItem(sessionStorage.length+1,JSON.stringify(userObj));
        name.value="";
        address.value="";
        dob.value="";
       
    }
}

const showLC=()=>{
    
    $(document).ready(()=>{
        $('#sortable').sortable();
        $('#sortable').disableSelection();
    });

    for(let i=sessionStorage.length;i>0;i--){
        console.log('value'+i);
        let count=i-1;
       let content=
       `<ul class="sortable" style="width:500px">
       <li class="ui-state-default">
       
    <div class="row">    
            <div class="col-md-4"><img src="lcicon.png" alt="Smiley face" height="150" width="120"></div>
            <div class="col-md-6">
            <div><label>Name:</label>&nbsp&nbsp ${JSON.parse(sessionStorage.getItem(sessionStorage.key(i-1))).name}</div>
            <div><label>Address:</label>&nbsp&nbsp ${JSON.parse(sessionStorage.getItem(sessionStorage.key(i-1))).address}</div>
            <div><label>DOB:</label>&nbsp&nbsp ${JSON.parse(sessionStorage.getItem(sessionStorage.key(i-1))).dob}</div>
            <div><label>Driving Lc No:</label>&nbsp&nbsp ${JSON.parse(sessionStorage.getItem(sessionStorage.key(i-1))).dlc}</div>
            <div><label>EXpiry Date:</label>&nbsp&nbsp ${JSON.parse(sessionStorage.getItem(sessionStorage.key(i-1))).exp}</div>

            </div>
            <span class="col-sm-1">
            <a href="javascript:deleteLC(${sessionStorage.key(i-1)})"> 
                <img src="deleteicon.png" height="20" width="20">
            </a>
            </span>
            <span class="col-sm-1">
            <a href="javascript:editLC(${sessionStorage.key(i-1)})"> 
                <img src="editicon.png" height="20" width="20">
            </a>
            </span>
    </div>
    
    </li>
    </ul>`;
    document.getElementById('sortable').innerHTML+=content;
    }
    
    
}
const refreshpage=()=>{
    window.location="drivingLCAdd.html";
}
const pageforword=()=>{
    window.location="drivingLCAdd.html";
}

const deleteLC=(a)=>{
    sessionStorage.removeItem(a);
    sessionStorage.length+=1;
    window.location='drivingLCAdd.html';
}
const editLC=(a)=>{
    console.log('editable');
    //alert(a);
    let pdt=JSON.parse(sessionStorage.getItem(a));
   // console.log(pdt);
    sessionStorage.removeItem(a);    
    sessionStorage.setItem('edit-item',JSON.stringify(pdt));
    
    window.location='editRecord.html';
}
const editProduct=()=>{
    const _item=sessionStorage.getItem('edit-item');
    console.log(_item);
    if(_item!=null){
        document.getElementById('name').value=JSON.parse(_item).name;
        document.getElementById('address').value=JSON.parse(_item).address;
        document.getElementById('dob').value=JSON.parse(_item).dob;
        
    }
    sessionStorage.removeItem('edit-item');
}

const saveEdit=()=>{
    var userObj={
        name:name.value,
        address:address.value,
        dob:dob.value,
        dlc:dlc
    };
    sessionStorage.setItem(sessionStorage.length+1,JSON.stringify(userObj));
    name.value="";
    address.value="";
    dob.value="";
}