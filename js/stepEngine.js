export class StepEngine {
  constructor(config, mapManager) {
    this.config = config;
    this.mapManager = mapManager;
    this.topicIndex = 0;
    this.stepIndex = 0;

    this.initTabs();
    this.bindNav();
  }

  initTabs() {
    const tabs = document.getElementById("tabs");
    this.config.topics.forEach((topic, i) => {
      const btn = document.createElement("button");
      btn.innerText = topic.title;
      btn.onclick = () => this.goToTopic(i);
      tabs.appendChild(btn);
    });
  }

  bindNav() {
    prevBtn.onclick = () => this.prev();
    nextBtn.onclick = () => this.next();
  }

  goToTopic(i) {
    this.topicIndex = i;
    this.stepIndex = 0;
    this.mapManager.loadTopic(this.config.topics[i]);
    this.render();
  }

  render() {
    const topic = this.config.topics[this.topicIndex];
    const step = topic.steps[this.stepIndex];

    stepText.innerHTML =
      `<strong>${step.title}</strong><br>${step.text}`;

    if (topic.type === "map") {
      map.style.display = "block";
      content.style.display = "none";

      if (step.focus) this.mapManager.focus(step.focus);
      if (step.route) this.mapManager.showRoute(step.route);
    } else {
      map.style.display = "none";
      content.style.display = "block";
      content.innerHTML =
        `<div class="step-content">
          <img src="${step.image}">
        </div>`;
    }
  }

  next() {
    if (this.stepIndex <
        this.config.topics[this.topicIndex].steps.length - 1) {
      this.stepIndex++;
      this.render();
    }
  }

  prev() {
    if (this.stepIndex > 0) {
      this.stepIndex--;
      this.render();
    }
  }
}
