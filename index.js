<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flying Bird Animation</title>
<style>
    body {
        margin: 0;
        overflow: hidden;
    }
    #bird {
        position: absolute;
        top: 50%;
        left: -50px; /* 初始位置在屏幕外 */
        width: 50px;
        height: auto;
        transition: transform 2s linear;
    }
</style>
</head>
<body>
    <img id="bird" src="https://www.w3schools.com/images/w3schools_green.jpg" alt="Bird">
    
    <script>
        const bird = document.getElementById("bird");
        let flying = false;

        // 函数来控制鸟的飞行
        function flyBird() {
            if (!flying) {
                // 移动鸟到右边
                bird.style.transform = "translateX(calc(100vw + 50px))"; // 将鸟移到屏幕右边以外
                setTimeout(() => {
                    // 移动鸟到左边
                    bird.style.transform = "translateX(-50px)"; // 将鸟移到屏幕左边以外
                    flying = false;
                }, 2000); // 2秒后移回左边
                flying = true;
            }
        }

        // 每3秒调用一次飞行函数
        setInterval(flyBird, 3000);
    </script>
</body>
</html>
