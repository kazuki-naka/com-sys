const try_number = 10;
const answer_number = Math.floor(Math.random() * try_number) + 1;
console.log(answer_number);
let chat_robot = document.querySelector('.chat-robot');
let chat_human = document.querySelector('.chat-human');
let count = 0;
let flag = false;

let leftArm = document.querySelector('.left_arm'); 
let rightArm = document.querySelector('.right_arm'); 
let leftEye = document.querySelector('.left_eye'); 
let rightEye = document.querySelector('.right_eye'); 

let arr = [];
let length = 5;

for (var i = 0; i < length; i++) {
  arr.push(Math.floor(Math.random() * try_number) + 1);
}

function answerJudge(random_number) {
    if (random_number == answer_number) {
        chat_human.innerHTML = "Correct!";
        setTimeout(() => {
            chat_robot.innerHTML = ""; 
            chat_human.innerHTML = ""; 
            chat_human.innerHTML = "Well Done";
            leftArm.classList.add("show_happy"); 
            rightArm.classList.add("show_happy"); 
        }, 2000);
        return true;
    } else {
        chat_human.innerHTML = "Incorrect!";
        return false;
    }
}

function answerToRobot(random_number, callback) {
    setTimeout(() => {
        chat_human.innerHTML = "....";
        setTimeout(() => {
            chat_human.innerHTML = "";
            let result = answerJudge(random_number);
            callback(result);
        }, 2000);
    }, 2000);
}

(function loop(count) {
    if (count < length && !flag) {
        let random_number = arr[count];
        setTimeout(() => {
            chat_robot.innerHTML = random_number + "?";
            answerToRobot(random_number, (result) => {
                flag = result;
                if (!flag) {
                    setTimeout(() => {
                        chat_robot.innerHTML = "";
                        chat_human.innerHTML = "";
                        loop(count + 1); // 再帰的に次のループを呼び出す
                    }, 2000);
                }
            });
        }, 1000 * count);
    } else if (count >= length && !flag) {
        chat_human.innerHTML = "OK, stop it"; 
        leftArm.classList.add("show_sad"); 
        rightArm.classList.add("show_sad"); 
        leftEye.classList.add("show_sad"); 
        rightEye.classList.add("show_sad"); 
    }
})(count);
