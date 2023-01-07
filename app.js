


const data = [ 
    
];
console.log(data)
const fname = document.querySelector('.text-username');
const comment = document.querySelector('.text-comment')

function addComment(){
    const comments = {
        "username" : fname.value,
        "comment"  : comment.value,
    }

    data.push(comments);
}

console.log(addComment())
const container = document.querySelector('.comments')
data.forEach(function(value){
        container.innerHTML += `     <div class="comment-section">
    <div class="name">
        <h3>Name:${value.username}</h3>
    </div>
    <div class="added-comment">
        <div class="added-comment-dsipaly">
            <div class="comment">Comment: ${value.comment} </div> 
        </div>  
        <div class="icons">                    
            <div class=" like">
                <button> 0 <i class="fa-solid fa-thumbs-up"></i></button>
            </div>
            <div class="dislike"> 
         <button> 0 <i class="fa-solid fa-thumbs-down"></i></button>
                </div>
            <div class="delete">
                <button>Delete</button>
            </div>
        </div>              
    </div>
    
</div>        `

    
});


