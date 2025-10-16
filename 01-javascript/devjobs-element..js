class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    //encapsulando el componente para que tenga su propio espacio de estilos
    this.attachShadow({ node: "open" });
  }

  createURLavatarService(service, username) {
    return `https://unavatar.io/${service}/${username}`;
  }

  render() {
    const service = this.getAttribute("service") ?? "github";
    const username = this.getAttribute("username") ?? "midudev";
    const size = this.getAttribute("size") ?? "40";

    const url = this.createURLavatarService(service, username);

    this.shadowRoot.innerHTML = `
        <!-- Estilos aislados del componente -->
        <style>
            img {

            }
        </style>
        <img 
            src="${url}"
            class="avatar"
            size="${size}"
        />
        `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
