document.addEventListener("DOMContentLoaded", function () {
  const startPatrolButton = document.getElementById("startPatrol");
  const stopPatrolButton = document.getElementById("stopPatrol");
  const robotInfoTable = document.getElementById("robotInfo");
  const navigateButton = document.getElementById("navigate");

  // 示例数据
  const robotData = ["沪A001", "沪A002", "沪A003"];

  startPatrolButton.addEventListener("click", function () {
    // 启动巡逻操作
    // 在这里添加相应的JavaScript逻辑
  });

  stopPatrolButton.addEventListener("click", function () {
    // 停止巡逻操作
    // 在这里添加相应的JavaScript逻辑
  });

  // 更新表格内容
  function updateRobotInfo() {
    robotInfoTable.querySelector("tbody").innerHTML = "";
    robotData.forEach(function (plate) {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
      cell.textContent = plate;
      row.appendChild(cell);
      robotInfoTable.querySelector("tbody").appendChild(row);
    });
  }

  navigateButton.addEventListener("click", function () {
    // 导航到指定位置操作
    // 在这里添加相应的JavaScript逻辑
  });

  // 初始化表格内容
  updateRobotInfo();
});
