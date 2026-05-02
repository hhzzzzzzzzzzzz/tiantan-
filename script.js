const statusBox = document.querySelector("#status");
const scene = document.querySelector("a-scene");
const target = document.querySelector("[mindar-image-target]");
const popStage = document.querySelector("#popStage");

fetch("./assets/tiantan-main-target.mind", { method: "HEAD" }).catch(() => {
  statusBox.innerHTML = `
    <strong>还缺少识别文件</strong>
    <span>打开 tools/compile-target.html 生成 tiantan-main-target.mind 后放入 assets 文件夹。</span>
  `;
});

scene.addEventListener("arReady", () => {
  statusBox.innerHTML = `
    <strong>摄像头已启动</strong>
    <span>把镜头对准书中的长卷主图，队伍会从页面中立起来。</span>
  `;
});

scene.addEventListener("arError", () => {
  statusBox.innerHTML = `
    <strong>AR 启动失败</strong>
    <span>手机摄像头通常需要 HTTPS；本地请用 localhost，手机测试建议部署 HTTPS。</span>
  `;
});

target.addEventListener("targetFound", () => {
  statusBox.innerHTML = `
    <strong>已识别长卷</strong>
    <span>天坛仪仗队伍正在立体展示。</span>
  `;
  popStage.emit("targetFound");
});

target.addEventListener("targetLost", () => {
  statusBox.innerHTML = `
    <strong>正在寻找长卷</strong>
    <span>保持整张长卷入镜，避免反光和过暗。</span>
  `;
  popStage.emit("targetLost");
});
