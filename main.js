const container = document.querySelector('.container');
var inputValue = document.querySelector('.input');
var total = document.getElementById('total')
const add = document.querySelector('.add');

if (window.localStorage.getItem("todos") == undefined) {
    var todos = [];
    window.localStorage.setItem("todos", JSON.stringify(todos));
}

var todosEX = window.localStorage.getItem("todos");
var todos = JSON.parse(todosEX);


//Item create kiya hai yaha pe
class item {
    constructor(name) {
        this.createItem(name);
    }
    createItem(name) {
        var itemBox = document.createElement('div');
        itemBox.classList.add('item');

        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");

        //Trigger the completed event
        checkbox.addEventListener("change", function (event) {
            if (this.checked) completed.textContent = +completed.textContent + 1;
            else completed.textContent = +completed.textContent - 1;
        });

        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');


        var edit = document.createElement('button');
        edit.classList.add('edit');
        edit.innerHTML = "&#128394;&#65039;";
        edit.addEventListener('click', () => this.edit(input, name));

        var down = document.createElement('button');
        down.classList.add('down');
        down.innerHTML = "▼";
        down.addEventListener('click', () => this.down(Form));


        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = "&#x2715;";
        remove.addEventListener('click', () => this.remove(itemBox, name));


        var Form = document.createElement('name');
        Form.classList.add('form');
        Form.setAttribute("id", "form");

        //add notes
        var y = document.createElement("TEXTAREA");
        y.placeholder = "Add Notes";
        y.classList.add('forminput');

        //add due date
        var z = document.createElement("box3")
        z.classList.add("box3");

        var a = document.createElement("box4");
        z.classList.add("box4");


        var e = document.createElement("box5")
        e.appendChild(document.createTextNode('Due Date :'));
        e.classList.add("box5");

        var b = document.createElement("button");
        b.appendChild(document.createTextNode('Today'));
        b.value = 'Today' ;
        b.classList.add("btn1");
        b.addEventListener('click', () => this.b(f));

        var c = document.createElement("button");
        c.appendChild(document.createTextNode('Tommorow'));
        c.value = 'Tommorow' ;
        c.classList.add("btn2");
        c.addEventListener('click', () => this.c(f));

        var d = document.createElement("Input");
        d.type = "date";
        d.id ="due";
        d.classList.add("btn3");

        var f = document.createElement("input");
        f.type="text";
        f.value="";
        f.classList.add("box6");

        //add Priority 

        var g = document.createElement("box7")
        g.appendChild(document.createTextNode('Priority :'));
        g.classList.add("box7");

        var h = document.createElement("box8");
        h.classList.add("box8");

        var i = document.createElement("SELECT");
        i.setAttribute("id", "select");

        var option = document.createElement("option");
        option.text = "Trivial";
        i.add(option); 
        var option1 = document.createElement("option");
        option1.text = "Low";
        i.add(option1);
        var option2 = document.createElement("option");
        option2.text = "Moderate";
        i.add(option2);
        var option3 = document.createElement("option");
        option3.text = "High";
        i.add(option3);

       //Appending
        container.appendChild(itemBox);

        itemBox.appendChild(checkbox);
        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(down);
        itemBox.appendChild(remove);
        itemBox.appendChild(Form);
        Form.appendChild(y);
        Form.appendChild(z);
        z.appendChild(e);
        e.appendChild(f);
        z.appendChild(a);
        a.appendChild(b);
        a.appendChild(c);
        a.appendChild(d);
        z.appendChild(g);
        g.appendChild(h);
        h.append(i);
    }

    edit(input, name) {
        if (input.disabled == true) {
            input.disabled = !input.disabled;
        }
        else {
            input.disabled = !input.disabled;
            let indexof = todos.indexOf(name);
            todos[indexof] = input.value;
            window.localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

    remove(itemBox, name) {
        confirm('Your todo Will be deleted');
        itemBox.parentNode.removeChild(itemBox);
        let index = todos.indexOf(name);
        todos.splice(index, 1);
        window.localStorage.setItem("todos", JSON.stringify(todos));

    }

    down(Form){
        Form.querySelector("form");
        Form.classList.toggle("display");
    }
    b(f){
        f = document.querySelector(".btn1").value;
	    document.querySelector(".box6").value = f;
    }
    c(f){
        f = document.querySelector(".btn2").value;
	    document.querySelector(".box6").value = f; 
    }
    d(f){
        f = document.getElementById("due").value;
        document.querySelector(".box6").value = f;

    }


}

add.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (inputValue.value != "") {
        new item(inputValue.value);
        todos.push(inputValue.value);
        window.localStorage.setItem("todos", JSON.stringify(todos));
        inputValue.value = "";
    }
}

for (var v = 0; v < todos.length; v++) {
    new item(todos[v]);
}


