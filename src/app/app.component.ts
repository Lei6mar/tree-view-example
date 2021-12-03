import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.jsonObject = {
      menu: {
        id: 'file',
        value: 'File',
        popup: {
          menuitem: [
            { value: 'New', onclick: 'CreateNewDoc()' },
            { value: 'Open', onclick: 'OpenDoc()' },
            { value: 'Close', onclick: 'CloseDoc()' },
          ],
        },
      },
    };
    this.origObject = this.jsonObject;
  }
  title = 'json-tree';
  visible = true;

  jsonObject: any ;



  origObject: any;


  filterObject: any = {};

  imprimirObjeto() {
    console.log(this.jsonObject);
  }

  changeVisibility(visibility: boolean) {
    this.visible = !visibility;
    // return !visibility;
  }

  showAllElements() {
    // console.log(document.getElementsByClassName('hidden'));
    let elements = document.getElementsByClassName('hidden');

    // console.log(elements.length);
    if (elements.length) {
      for (let index = elements.length; index > 0; index--) {
        const element = elements[index - 1];
        (element as HTMLElement).classList.remove('hidden');
        let parent = element.parentElement;
        if (parent) {
          (parent as HTMLElement).childNodes[0].textContent = '-';
          // (parent as HTMLElement).childNodes.forEach((c, i) => {
          //   console.log(c, i);
          // }
          // )
          // (parent as HTMLElement).childNodes[2].classList.remove('');
        }
        // console.log((element as HTMLElement).parentElement?.childNodes);
      }
      // this.showCorrectCharButton();
    }
    // console.log(document.);
  }

  showCorrectCharButton() {
    let elements = document.getElementsByClassName('hide_button');
    for (let index = elements.length; index > 0; index--) {
      const element = elements[index - 1];
      // console.log((element as HTMLElement).textContent);
      (element as HTMLElement).textContent = '-';
      (element as HTMLElement).classList.remove('hide_button');
    }
  }

  searchElement(ev: any) {
    // let object = document.getElementById("object");
    // let objectFilter = document.getElementById("object-filter");
    // if(object){
    //   object.style.display = 'none'
    // }

    // console.log(this.filterWith(Object.values(this.origObject),ev.target.value.toLowerCase() ));

    if (ev.target.value.trim().length > 0) {
      // const output = Object.fromEntries(
      //   Object.entries(this.origObject).filter(([key, value]) => {
      //     return key.toLowerCase().includes(ev.target.value.toLowerCase());
      //   })
      // );
      this.filterObject = {};
      this.iterateObject(this.origObject, ev.target.value.trim());
      // this.jsonObject =  output
      this.jsonObject = this.filterObject;

      // console.log(this.filterObject);
    } else {
      this.jsonObject = this.origObject;
    }

    // let x = document.getElementsByClassName("parent-key");
  }

  iterateObject(
    object: any,
    search: any,
    parentKey: any = null,
    parentObject: any = null
  ) {
    if (object) {
      Object.keys(object).forEach((key) => {
        if (key.toLowerCase().includes(search.toLowerCase())) {
          // this.filterObject[key] = object[key]

          // if (object[key] ) {
          let newOB: any;
          if (
            // typeof object[key] === 'boolean' ||
            // typeof object[key] === 'string' ||
            // typeof object[key] === 'number' ||
            // object[key] == undefined
            typeof object[key] === 'object'
          ) {
            newOB = {};
            //   // let nestedOb: any = {};
            newOB[key] = object[key];
            return (this.filterObject = { ...newOB });
            //   // console.log(newOB);

            //   if (!this.filterObject.includes(newOB)) {
            //     return this.filterObject.push(newOB);
            //   }
          } else {
            newOB = {};
            newOB[parentKey] = parentObject[parentKey];
            return (this.filterObject = { ...newOB });

            // if (!this.filterObject.includes(newOB)) {
            //   return this.filterObject[key] = object[key]
            // }
            // }
            // if(typeof object[key] !== 'object' && parentKey && parentObject){
            // }else{
          }

          // else{
          //   if(!this.filterObject.includes(object[key])){

          //     this.filterObject.push(object[key]);
          //   }
          // }
          // let newOb = {k: key, ob: object[key]}
          // let newOb = JSON.parse(
          //   `{"${key}": ${JSON.stringify(object[key])}}`
          // );
          // this.filterObject = { newOb}
          // let newObj = object[key]

          // Object.assign()
          // console.log(key, object[key]);
          // }
        }

        if (typeof object[key] === 'object' /*&& object[key] != null*/) {
          this.iterateObject(object[key], search, key, object);
        }

        // }
      });
    }
  }

  loadJson(ev: any) {
    let json = ev.target.parentElement.children[2].value;
    console.log(json);
    try {
      json = JSON.parse(json);
      console.log(json);

      this.origObject = json;
      this.jsonObject = json;
    } catch (error) {
      console.log('json inválido');
    }
  }

  addRootObject(event: any, object: any) {
    console.log(event);
    console.log(object);
    object['newRoot'] = null;
  }
}
