let target = document.querySelector('.eyes'); 
let area = document.querySelector('body');
let message = document.querySelector('.message'); 

const mouse = document.querySelector(".mouse");

// ウィンドウ上でマウスが動いたときに発火するイベントリスナーを設定します。
window.onmousemove = (e) => {
  // マウスの現在のX座標から、要素の幅の半分を引いて、要素の中心がカーソルに来るようにします。
    const x = e.clientX - mouse.offsetWidth / 2;
    // マウスの現在のY座標から、要素の高さの半分を引いて、同じく要素の中心がカーソルに来るようにします。
    const y = e.clientY - mouse.offsetHeight / 2;
    // translate CSSプロパティを用いて要素を移動させるためのオブジェクトです。
    const mouseMoveStyle = {
    transform: `translate(${x}px,${y}px)`, // X軸とY軸に沿って要素を動かすスタイルを設定
    };
    // mouse 変数に格納された要素にアニメーションを適用します。
    // 第一引数はアニメーションのキーフレーム（ここでは移動のスタイル）、
    // 第二引数はアニメーションのオプションです。
    mouse.animate(mouseMoveStyle, {
        duration: 1000, // アニメーションの継続時間は1000ミリ秒（1秒）
        fill: "forwards", // アニメーションが完了した後も要素を最終状態に保持します
    });
};

area.addEventListener('mousemove', e => {
    let elemData = target.getBoundingClientRect();
    let transX = ((e.clientX - (elemData.width / 2)) - elemData.left) * 0.05; 
    let transY = ((e.clientY - (elemData.height / 2)) - elemData.top) * 0.05; 
    target.style.transform = "translate(" + transX + "px, " + transY + "px)"; 
});

area.addEventListener('mouseleave', e => {
    target.style.transform = "translate(0px, 0px)"; 
}); 

let right_arm = document.querySelector('.right_arm'); 
let left_arm = document.querySelector('.left_arm'); 

right_arm.addEventListener('mouseover', () => {
    mouse.style.display = 'none'; 
    let text = "See ya!"; 
    message.style.display = 'block'; 
    message.innerHTML = text; 
    message.forEach(m => {
		var text = m.innerHTML; 
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		m.innerHTML = textbox; 
	});

	TextTypingAnime(); 
}); 

right_arm.addEventListener('mouseleave', () => {
    mouse.style.display = 'block'; 
    message.innerHTML = ""; 
    message.style.display = 'none'; 
}); 

left_arm.addEventListener('mouseover', () => {
    mouse.style.display = 'none'; 
    let text = "Hi! How is it going?"; 
    message.style.display = 'block'; 
    message.innerHTML = text; 
    message.forEach(m => {
		var text = m.innerHTML
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		m.innerHTML = textbox; 
	});

	TextTypingAnime(); 
});

left_arm.addEventListener('mouseleave', () => {
    mouse.style.display = 'block'; 
    let text = ""; 
    message.innerHTML = text; 
    message.style.display = 'none'; 
});

let right_leg = document.querySelector('.right_leg'); 
let left_leg = document.querySelector('.left_leg'); 
let torso = document.querySelector('.torso'); 

MouseDisplay(right_leg); 
MouseDisplay(left_leg); 
MouseDisplay(torso)

function TextTypingAnime() {
	message.each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

function MouseDisplay(stuff) {
    stuff.addEventListener('mouseover', () => {
        mouse.style.display = 'none'; 
    });
    stuff.addEventListener('mouseleave', () => {
        mouse.style.display = 'block'; 
    });
}