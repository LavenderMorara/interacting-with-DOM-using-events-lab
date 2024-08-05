document.addEventListener("DOMContentLoaded", () => {
    let counter = 0;
    let isPaused = false;
    let intervalId;
    
    const counterDisplay = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const heartButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const commentForm = document.getElementById("comment-form");
    const commentsList = document.getElementById("list");
  
    function startCounter() {
      intervalId = setInterval(() => {intervalId
        if (!isPaused) {
          counter++;
          counterDisplay.textContent = counter;
        }
      }, 1000);
    }
  
    function togglePause() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalId);
        pauseButton.textContent = "resume";
        plusButton.disabled = true;
        minusButton.disabled = true;
        heartButton.disabled = true;
      } else {
        startCounter();
        pauseButton.textContent = "pause";
        plusButton.disabled = false;
        minusButton.disabled = false;
        heartButton.disabled = false;
      }
    }
  
    function addLike() {
      const likesList = document.querySelector(".likes");
      let existingLike = document.getElementById(`like-${counter}`);
      if (existingLike) {
        let likesCount = existingLike.querySelector("span");
        likesCount.textContent = parseInt(likesCount.textContent) + 1;
      } else {
        let likeItem = document.createElement("li");
        likeItem.id = `like-${counter}`;
        likeItem.innerHTML = `${counter} has been liked <span>1</span> time`;
        likesList.appendChild(likeItem);
      }
    }
  
    function addComment(event) {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      let comment = document.createElement("p");
      comment.textContent = commentInput.value;
      commentsList.appendChild(comment);
      commentForm.reset();
    }
  
    //adding event listener on plus button
    plusButton.addEventListener("click", () => {
      counter++;
      counterDisplay.textContent = counter;
    });

    //adding event listener on minus button
    minusButton.addEventListener("click", () => {
      counter--;
      counterDisplay.textContent = counter;
    });
  
    heartButton.addEventListener("click", addLike);
    
    pauseButton.addEventListener("click", togglePause);
    
    commentForm.addEventListener("submit", addComment);

    startCounter();
  });
  