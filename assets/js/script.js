///////////////////////////////// ARRAY PROPIEDADES EN VENTA: /////////////////////////////////

const propiedades_venta = [
  //PROPIEDAD EN VENTA 1
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banios: 4,
    costo: "5.000",
    smoke: false,
    pets: false,
  },
  //PROPIEDAD EN VENTA 2
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banios: 1,
    costo: "1.200",
    smoke: true,
    pets: true,
  },
  //PROPIEDAD EN VENTA 3
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banios: 3,
    costo: "4.500",
    smoke: false,
    pets: true,
  },
  //PROPIEDAD EN VENTA 4
  {
    nombre: "Apartamento moderno en zona exclusiva",
    src: "https://images1.apartments.com/i2/eP5RD20EnOCxdRmxHgo72RL4e2MdVr64BWtW5E5soS4/117/sagela---brand-new-los-angeles-ca-building-photo.jpg?p=1",
    descripcion: "Apartamento nuevo ubicado en exclusiva zona residencial",
    ubicacion: "523 Doom street Avenue, Silent hill City, CA 66613",
    habitaciones: 3,
    banios: 2,
    costo: "2.000",
    smoke: true,
    pets: true,
  },
];

///////////////////////////////// ARRAY PROPIEDADES EN ALQUILER: /////////////////////////////////

const propiedades_alquiler = [
  //PROPIEDAD EN ALQUILER 1
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: "1.000",
    smoke: false,
    pets: true,
  },

  //PROPIEDAD EN ALQUILER 2
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banios: 3,
    costo: "2.500",
    smoke: true,
    pets: true,
  },

  //PROPIEDAD EN ALQUILER 3
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banios: 2,
    costo: "2.200",
    smoke: false,
    pets: false,
  },

  //PROPIEDAD EN ALQUILER 4
  {
    nombre: "Condominio acojedor cercano al centro",
    src: "https://media.istockphoto.com/id/1461440772/photo/los-angeles-venice-california-usa-apartments.jpg?s=612x612&w=0&k=20&c=yfD1rfl4TGvj3pGvg4Vs9KZDBjWAudhcXHX1kPoHRr0=",
    descripcion:
      "Este acojedor condominio está ubicado a solo 5 minutos del centro",
    ubicacion: "696 Dante Street, Abbystown, CA 58735",
    habitaciones: 2,
    banios: 1,
    costo: "1.000",
    smoke: true,
    pets: true,
  },
];

// FUNCION PARA GENERAR LAS PROPIEDADES SEGUN CONTENEDOR Y TIPO DE PROPIEDAD (VENTA/ALQUILER)
function mostrarPropiedades(contenedor, propiedades) {
  if (contenedor) {
    for (let i = 0; i < propiedades.length; i++) {
      contenedor.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${propiedades[i].src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">${propiedades[i].nombre}</h5>
            <p class="card-text">${propiedades[i].descripcion}</p>
            <p><i class="fas fa-map-marker-alt"></i> ${
              propiedades[i].ubicacion
            }</p>
            <p><i class="fas fa-bed"></i> ${
              propiedades[i].habitaciones
            } Habitaciones | 
            <i class="fas fa-bath"></i> ${propiedades[i].banios} Baños</p>
            <p><i class="fas fa-dollar-sign"></i> $${propiedades[i].costo}</p>
            ${
              propiedades[i].smoke
                ? "<p class='text-success'><i class='fas fa-smoking'></i> Permitido fumar</p>"
                : "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>"
            }
            ${
              propiedades[i].pets
                ? "<p class='text-success'><i class='fas fa-paw'></i> Mascotas permitidas</p>"
                : "<p class='text-danger'><i class='fas fa-ban'></i> No se permiten mascotas</p>"
            }
          </div>
        </div>
      </div>
      `;
    }
  }
}

// MOSTRAR LAS 3 PRIMERAS PROPIEDADES DE CADA TIPO (VENTA/ALQUILER) EN "index.html"
if (window.location.pathname === "/index.html" || window.location.pathname === "/" || window.location.pathname === "/desafio-04-js/" || window.location.pathname === "/desafio-04-js/index.html") {
  const contenedorVentas = document.querySelector(".contenedorVentas");
  const contenedorAlquileres = document.querySelector(".contenedorAlquileres");
  mostrarPropiedades(contenedorVentas, propiedades_venta.slice(0, 3));
  mostrarPropiedades(contenedorAlquileres, propiedades_alquiler.slice(0, 3));
}

// MOSTRAR TODAS LAS PROPIEDADES EN "propiedades_venta.html"
if (window.location.pathname === "/propiedades_venta.html" || window.location.pathname === "/desafio-04-js/propiedades_venta.html") {
  const contenedorVentas = document.querySelector(".contenedorVentas");
  mostrarPropiedades(contenedorVentas, propiedades_venta);
}

// MOSTRAR TODAS LAS PROPIEDADES EN "propiedades_alquiler.html"
if (window.location.pathname === "/propiedades_alquiler.html" || window.location.pathname === "/desafio-04-js/propiedades_alquiler.html") {
  const contenedorAlquileres = document.querySelector(".contenedorAlquileres");
  mostrarPropiedades(contenedorAlquileres, propiedades_alquiler);
}
