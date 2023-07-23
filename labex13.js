list = {
    '101': {
        'total': '59',
        'pass': '55',
        'fail': '4',
        'aplus': '9'
    },
    '102': {
        'total': '51',
        'pass': '51',
        'fail': '0',
        'aplus': '19'
    },
    '103': {
        'total': '49',
        'pass': '38',
        'fail': '11',
        'aplus': '3'
    },
}

function onrun(){
    classCode = document.getElementById('classcode').value;

    if (list.hasOwnProperty(classCode)){    
        document.getElementById('ccode').innerHTML = "Class code: " + classCode
        document.getElementById("total").innerHTML = 'Total students: ' + list[classCode]['total']
        document.getElementById("pass").innerHTML = 'Passed students: ' + list[classCode]['pass']
        document.getElementById("fail").innerHTML = 'Failed students: ' + list[classCode]['fail']
        document.getElementById("faplus").innerHTML = 'Full A+ students: ' + list[classCode]['aplus']

    }
    else{
        document.getElementsByClassName("container")[0].innerHTML = "Invalid class code!"
    }
}
