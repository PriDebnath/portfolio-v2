// //
// const moveableBoxContainer = document.getElementById("moveable-box-container")
// const rect = moveableBoxContainer.getBoundingClientRect();

// const boxCount = 6;
// //
// let activeBox = null;
// let offsetX = 0;
// let offsetY = 0;

// let lastX = 0;
// let lastY = 0;
// //
// function updatePosition(box) {
//     box.style.transform = `translate(${box.x}px, ${box.y}px)`;
// }
// //
// for (let i = 0; i < boxCount; i++) {
//     const div = document.createElement("div");
//     div.className = "moveable-box";
//     div.textContent = i + 1;
//     div.x = Math.random() * (moveableBoxContainer.offsetWidth - 100);
//     div.y = Math.random() * (moveableBoxContainer.offsetHeight - 100);
//     div.vx = 0;
//     div.vy = 0;
//     //     div.vx = 2;
//     // div.vy = 1;

//     updatePosition(div);

//     div.addEventListener("pointerdown", (event) => {
//         activeBox = div;
//         offsetX = event.clientX - div.x;
//         offsetY = event.clientY - div.y;


//         lastX = div.x;
//         lastY = div.y;

//         div.vx = 0;
//         div.vy = 0;
//     });
//     moveableBoxContainer.appendChild(div);
// }

// window.addEventListener("pointermove", (event) => {
//     if (activeBox) {
//         // activeBox.x = event.clientX - offsetX
//         // activeBox.y = event.clientY - offsetY
//         const newX = event.clientX - offsetX;
//         const newY = event.clientY - offsetY;

//         activeBox.vx = newX - lastX;
//         activeBox.vy = newY - lastY;

//         activeBox.x = newX;
//         activeBox.y = newY;

//         lastX = newX;
//         lastY = newY;
//         updatePosition(activeBox)
//     }
// });

// window.addEventListener("pointerup", () => {
//     activeBox = null;
// });


// function animate() {
//     [...moveableBoxContainer.children].forEach(box => {
//         if (box !== activeBox) {
//             box.vy += 0.5; // gravity

//             box.x += box.vx;
//             box.y += box.vy;
//             // floor colition
//             if (box.y > rect.height - 80) {
//                 box.y = rect.height - 80;
//                 box.vy *= -0.6;
//             }
//             // Left wall
//             if (box.x < 0) {
//                 box.x = 0;
//                 box.vx *= -0.6;
//             }

//             // Right wall
//             if (box.x > rect.width - 80) {
//                 box.x = rect.width - 80;
//                 box.vx *= -0.6;
//             }

//             // friction 
//             box.vx *= 0.99;
//             box.vy *= 0.99;

//             updatePosition(box);
//         }
//     });

//     requestAnimationFrame(animate);
// }
// animate();

// ///
// // {
// //     console.log("physics")
// //     boxes.forEach((b, i) => {
// //         if (b !== activeBox) {
// //             b.vy += 0.5;
// //             // gravity
// //             b.x += b.vx;
// //             b.y += b.vy;
// //                  // Floor collision
// //             if (b.y > moveableBoxContainer.offsetHeight - 80) {
// //                 b.y = moveableBoxContainer.offsetHeight - 80;
// //                 b.vy *= -0.6;
// //             }
// //             // Wall collision
// //             if (b.x < 0 || b.x > moveableBoxContainer.offsetWidth - 80) {
// //                 b.vx *= -0.6;

// //             }
// //         }
// //         // Box collision
// //         boxes.forEach((other, j) => {
// //             if (i !== j) {
// //                 const dx = b.x - other.x;
// //                 const dy = b.y - other.y;
// //                 const dist = Math.sqrt(dx * dx + dy * dy);
// //                 if (dist < 80) {
// //                     const angle = Math.atan2(dy, dx);
// //                     const overlap = 80 - dist;
// //                     b.x += Math.cos(angle) * overlap / 2;
// //                     b.y += Math.sin(angle) * overlap / 2;
// //                     other.x -= Math.cos(angle) * overlap / 2;
// //                     other.y -= Math.sin(angle) * overlap / 2;
// //                 }
// //             }
// //         }); updatePosition(b);
// //     });
// // //  requestAnimationFrame(physics);  }