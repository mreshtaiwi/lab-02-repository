/* eslint-disable camelcase */
'use strict';
let all = [];
let droplist = [];
function Item(data) {
  this.image_url = data.image_url;
  this.keyword = data.keyword;
  this.description = data.description;
  this.horns = data.horns;
  this.title = data.title;
  all.push(this);
}
Item.prototype.render = function () {
  let listClone = $('.image-template').clone();
  listClone.addClass(`${this.keyword}`);
  listClone.removeClass('image-template');
  // console.log(all[0].title);
  // listClone.forEach( function() {
  //   listClone.html(`
  //   <h2>${this.title}</h2>
  //   <img class ='showImages ${this.keyword}' src='${this.image_url}' alt ='${this.keyword}' >
  //   <p>${this.description}</p>
  //   `);
  // });
  for (let i = 0; i < listClone.length; i++) {
    listClone.html(`
        <h2>${this.title}</h2>
        <img class ='showImages ${this.keyword}' src='${this.image_url}' alt ='${this.keyword}' >
        <p>${this.description}</p>
        `);
  }
  //$('#mainSelect').append(`<option value='${this.keyword}' name='${this.keyword}'> ${this.keyword}</option>`);
  $('main').append(listClone);
};

$('select').on('change', function (e) {
  if (e.target.value === 'default') {
    $('.narwhal').show();
    $('.rhino').show();
    $('.unicorn').show();
    $('.unilego').show();
    $('.triceratops').show();
    $('.markhor').show();
    $('.mouflon').show();
    $('.addax').show();
    $('.chameleon').show();
    $('.lizard').show();
    $('.dragon').show();
  } else if (e.target.value === 'narwhal') {
    $('.narwhal').show();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'rhino') {
    $('.rhino').show();
    $('.narwhal').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'unicorn') {
    $('.unicorn').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'unilego') {
    $('.unilego').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'triceratops') {
    $('.triceratops').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'markhor') {
    $('.markhor').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'mouflon') {
    $('.mouflon').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'addax') {
    $('.addax').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'chameleon') {
    $('.chameleon').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.lizard').hide();
    $('.dragon').hide();
  } else if (e.target.value === 'lizard') {
    $('.lizard').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.dragon').hide();
  }
  else if (e.target.value === 'dragon') {
    $('.dragon').show();
    $('.narwhal').hide();
    $('.rhino').hide();
    $('.unicorn').hide();
    $('.unilego').hide();
    $('.triceratops').hide();
    $('.markhor').hide();
    $('.mouflon').hide();
    $('.addax').hide();
    $('.chameleon').hide();
    $('.lizard').hide();
  }
});


//read the json file
$.get('../data/page-1.json')
  .then(data => {
    data.forEach((value, idx) => {
      let list = new Item(value);
      list.render();
    });
  })
  .then(() => {
    for (let i = 0; i < all.length; i++) {
      droplist.push(all[i].keyword);
    }

    let newlist = [];
    droplist.sort().reduce(function(a, b)
    { if (b !== a[0]) a.unshift(b);
      return a;
    }
    , newlist);
    //console.log(newlist);
    //droplist = [...new Set(droplist)];
    for (let i = 0; i < newlist.length; i++) {
      $('#mainSelect').append(`<option value='${newlist[i]}' name='${newlist[i]}'> ${newlist[i]}</option>`);
    }
  });
