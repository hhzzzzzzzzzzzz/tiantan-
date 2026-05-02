const statusBox = document.querySelector("#status");
const scene = document.querySelector("a-scene");
const target = document.querySelector("[mindar-image-target]");
const popStage = document.querySelector("#popStage");
const isWechat = /MicroMessenger/i.test(navigator.userAgent);

const setStatus = (title, body, action = "") => {
  statusBox.innerHTML = `
    <strong>${title}</strong>
    <span>${body}</span>
    ${action}
  `;
};

fetch("./assets/tiantan-main-target.mind", { method: "HEAD" }).catch(() => {
  setStatus("还缺少识别文件", "打开 tools/compile-target.html 生成 tiantan-main-target.mind 后放入 assets 文件夹。");
});

scene.addEventListener("arReady", () => {
  const wechatNote = isWechat ? "请后退一点，让整张长卷和周边环境都入镜；如果仍是黑屏，请用 Safari 打开。" : "请后退一点，让整张长卷和周边环境都入镜，队伍会从页面中立起来。";
  setStatus("摄像头已启动", wechatNote, '<button type="button" id="retryCamera">重新加载摄像头</button>');
});

scene.addEventListener("arError", () => {
  const browserTip = isWechat ? "微信内置浏览器对 WebAR 支持不稳定，请点右上角菜单，用 Safari 或系统浏览器打开。" : "手机摄像头通常需要 HTTPS；本地请用 localhost，手机测试建议部署 HTTPS。";
  setStatus("AR 启动失败", browserTip, '<button type="button" id="retryCamera">重新加载摄像头</button>');
});

target.addEventListener("targetFound", () => {
  setStatus("已识别长卷", "天坛仪仗队伍正在立体展示。");
  popStage.emit("targetFound");
});

target.addEventListener("targetLost", () => {
  setStatus("正在寻找长卷", "把手机拿远一些，保持整张长卷和书页边缘都入镜，避免反光和过暗。");
  popStage.emit("targetLost");
});

statusBox.addEventListener("click", (event) => {
  if (event.target.id === "retryCamera") {
    window.location.reload();
  }
});
