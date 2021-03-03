import styles from "../styles/Arquitetura.module.scss";

import Head from "next/head";
import ExemploLayout from "../components/ExemploLayout";
import Arrows from "../components/arrows/Arrows";

export default function Index() {
  const structuredJSON = `
  {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "mainEntityOfPage":{
    "@type":"WebPage",
    "@id":"https://www.brunobarros.dev/exemplo-arquitetura"
    },
    "image": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/favicon.png",
    "height": 128,
    "width": 128},
    "author": {
    "@type": "Organization",
    "name": "brunobarros.dev"
    },
    "publisher": {
    "@type": "Organization",
    "name": "brunobarros.dev",
    "logo": {
    "@type": "ImageObject",
    "url": "https://www.brunobarros.dev/favicon.png",
    "width": 128,
    "height": 128
    }
    },
    "headline": "Bruno Barros - Exemplos de escritório de arquitetura",
    "description": "Bruno Barros - Exemplos de escritório de arquitetura"
  }
`;

  return (
    <ExemploLayout>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Bruno Barros - Exemplos de escritório de arquitetura"
        />
        <meta
          property="og:title"
          content="Bruno Barros - Exemplos de escritório de arquitetura"
        />
        <meta
          property="og:description"
          content="Bruno Barros - Exemplos de escritório de arquitetura"
        />
        <meta
          property="og:url"
          content={`https://www.brunobarros.dev/exemplo-arquitetura`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image"
          itemProp="image"
          content={`/favicon.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="fb:app_id" content="276016760683197" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="brunobarros.dev" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@brunobarros.dev" />
        <meta
          name="twitter:title"
          content="Bruno Barros - Exemplos de escritório de arquitetura"
        />
        <meta
          name="twitter:description"
          content="Bruno Barros - Exemplos de escritório de arquitetura"
        />
        <meta name="twitter:image" content="/favicon.png" />

        <link
          rel="icon"
          type="image/png"
          href="/favicon.png"
          sizes="128x128"
        ></link>

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital@1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredJSON }}
        />

        <title>Bruno Barros - Exemplos de escritório de arquitetura</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.arquitetura}>
          <video
            poster="https://res.cloudinary.com/bobarros/video/upload/w_1280,h_720,e_blur:300,f_auto/t8nqo307dpudvx1662xk.jpg"
            loop={true}
            muted={true}
            autoPlay={true}
          >
            <source src="https://res.cloudinary.com/bobarros/video/upload/f_auto,so_4,eo_12/t8nqo307dpudvx1662xk.mp4" />
          </video>
          <div className={styles.texto}>
            <p>
              Our home should reflect the way we feel inside!
            </p>
            <p className={styles.marca}>Bruno Barros - Architecture</p>
          </div>
        </div>
        <div id="fotos" className={styles.fotos}>
          <div className={`${styles.fotos__bloco} ${styles.fotos__foto}`}>
            <img
              alt="imagem de exemplo"
              src="https://images.unsplash.com/photo-1613685703237-6628de38ddb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75"
              srcSet={`
                    https://images.unsplash.com/photo-1613685703237-6628de38ddb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=1 1x,
                    https://images.unsplash.com/photo-1613685703237-6628de38ddb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=2 2x,
                    https://images.unsplash.com/photo-1613685703237-6628de38ddb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=3 3x`}
              width="870"
              height="400"
            />
          </div>
          <div className={`${styles.fotos__bloco} ${styles.fotos__texto}`}>
            <h1 className={styles.fotos__titulo}>Dignissimos distinctio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              reprehenderit incidunt modi, dignissimos distinctio excepturi.
            </p>
          </div>
        </div>
        <div className={styles.fotos}>
          <div
            className={`${styles.fotos__bloco} ${styles.fotos__foto}  ${styles.fotos__invertido}`}
          >
            <img
              alt="imagem de exemplo"
              src="https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75"
              srcSet={`
                    https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=1 1x,
                    https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=2 2x,
                    https://images.unsplash.com/photo-1534889156217-d643df14f14a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=3 3x`}
              width="870"
              height="400"
            />
          </div>
          <div className={`${styles.fotos__bloco} ${styles.fotos__texto}`}>
            <h1 className={styles.fotos__titulo}>Dignissimos distinctio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              reprehenderit incidunt modi, dignissimos distinctio excepturi.
            </p>
          </div>
        </div>
        <div className={styles.fotos}>
          <div className={`${styles.fotos__bloco} ${styles.fotos__foto}`}>
            <img
              alt="imagem de exemplo"
              src="https://images.unsplash.com/photo-1611596188649-7c8e9507bdb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75"
              srcSet={`
                    https://images.unsplash.com/photo-1611596188649-7c8e9507bdb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=1 1x,
                    https://images.unsplash.com/photo-1611596188649-7c8e9507bdb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=2 2x,
                    https://images.unsplash.com/photo-1611596188649-7c8e9507bdb4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=75&dpr=3 3x`}
              width="870"
              height="400"
            />
          </div>
          <div className={`${styles.fotos__bloco} ${styles.fotos__texto}`}>
            <h1 className={styles.fotos__titulo}>Dignissimos distinctio</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
              reprehenderit incidunt modi, dignissimos distinctio excepturi.
            </p>
          </div>
        </div>
        <div className={styles.paragrafos}>
          <h1 className={styles.nome}>Lorem, ipsum dolor.</h1>
          <div className={styles.items}>
            <div className={`${styles.paragrafo}`}>
              <svg
                id="Layer_1_1_"
                enableBackground="new 0 0 64 64"
                height={512}
                viewBox="0 0 64 64"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m7 62h4c.55273 0 1-.44775 1-1v-7h24v7c0 .55225.44727 1 1 1h9 6 9c.55273 0 1-.44775 1-1v-15c0-.26514-.10547-.51953-.29297-.70703l-1.70703-1.70703v-8.58594-32c0-.55225-.44727-1-1-1h-52c-2.75684 0-5 2.24316-5 5v50c0 2.75684 2.24316 5 5 5zm40-2v-10h4v10zm13 0h-7v-11c0-.55225-.44727-1-1-1h-6c-.55273 0-1 .44775-1 1v11h-7v-13.58594l11-11 4.29297 4.29297c.28711.28662.7168.37207 1.08984.2168.37403-.15479.61719-.51953.61719-.92383v-3h3v8c0 .26514.10547.51953.29297.70703l1.70703 1.70703zm-53-56h51v30h-4c-.55273 0-1 .44775-1 1v1.58594l-3.29297-3.29297c-.39062-.39062-1.02344-.39062-1.41406 0l-12 12c-.1875.1875-.29297.44189-.29297.70703v6h-24v-41c0-.55225-.44727-1-1-1h-4c-1.6543 0-3-1.3457-3-3s1.3457-3 3-3zm-3 6.99756c.83594.6289 1.875 1.00244 3 1.00244h3v48h-3c-1.6543 0-3-1.3457-3-3z" />
                <path d="m16 43h6c.55273 0 1-.44775 1-1 0-1.30371.83594-2.41602 2-2.82861v2.82861c0 .55225.44727 1 1 1h7c.55273 0 1-.44775 1-1v-13h20c.55273 0 1-.44775 1-1v-20c0-.55225-.44727-1-1-1h-38c-.55273 0-1 .44775-1 1v34c0 .55225.44727 1 1 1zm37-16h-12v-2h3c.55273 0 1-.44775 1-1 0-2.41455-1.7207-4.43506-4-4.89941v-10.10059h12zm-25-18v10h-1v2h2c.55273 0 1-.44775 1-1v-11h9v11c0 .55225.44727 1 1 1 1.30371 0 2.41602.83594 2.8291 2h-2.8291c-.55273 0-1 .44775-1 1v3h-6c-.55273 0-1 .44775-1 1v13h-5v-3c0-.55225-.44727-1-1-1-2.41504 0-4.43457 1.7207-4.89941 4h-4.10059v-20h7v-2h-7v-10z" />
                <path d="m14 48h2v2h-2z" />
                <path d="m18 48h2v2h-2z" />
                <path d="m22 48h2v2h-2z" />
              </svg>
              <p className={styles.paragrafo__texto}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sapiente, dicta autem praesentium quidem corporis nihil
                similique voluptatibus expedita explicabo et ipsum voluptatum.
              </p>
            </div>
            <div className={`${styles.paragrafo}`}>
              <svg
                enableBackground="new 0 0 512 512"
                height={512}
                viewBox="0 0 512 512"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m472 16h-432c-13.2333984 0-24 10.7666016-24 24v336c0 13.2333984 10.7666016 24 24 24h167.3051758l-6.6665039 80h-8.6386719v16h128v-16h-8.6386719l-6.6665039-80h167.3051758c13.2333984 0 24-10.7666016 24-24v-336c0-13.2333984-10.7666016-24-24-24zm-440 24c0-4.4111328 3.5888672-8 8-8h432c4.4111328 0 8 3.5888672 8 8v296h-448zm263.3056641 440h-78.6113281l6.6669922-80h65.2773438zm184.6943359-104c0 4.4111328-3.5888672 8-8 8h-432c-4.4111328 0-8-3.5888672-8-8v-24h448z" />
                  <path d="m256 464c13.2333984 0 24-10.7661133 24-24s-10.7666016-24-24-24-24 10.7661133-24 24 10.7666016 24 24 24zm0-32c4.4111328 0 8 3.5888672 8 8s-3.5888672 8-8 8-8-3.5888672-8-8 3.5888672-8 8-8z" />
                  <path d="m176 224c0 3.1616211 1.8623047 6.0263672 4.7509766 7.3105469l72 32c.0302734.0134277.0617676.0222168.092041.0351563.0854492.0368652.1728516.0655518.2592773.0991211.2194824.0854492.4406738.1628418.6647949.2280273.1062012.0308838.2124023.0585938.3198242.085083.220459.0543213.4421387.0980225.6652832.1333008.0976563.0155029.1943359.0340576.2922363.0457764.317627.03833.6359864.0629882.9545899.0629882h.0004883s.0002441 0 .0004883 0c.359375 0 .7182617-.0285645 1.0751953-.0769043.1152344-.015625.2275391-.0445557.3417969-.0651855.2407227-.043335.4802246-.0905762.7172852-.1561279.1347656-.0373535.2661133-.0855713.3994141-.130249.2106934-.0705566.4194336-.1452637.6252441-.2340088.1396484-.0600586.2756348-.1273193.4123535-.1955566.1035156-.0518799.2114258-.0921631.3134766-.1488037l72-40c2.540039-1.4106447 4.1152343-4.0878908 4.1152343-6.9931642v-56c0-.0419922-.0075684-.0825195-.0083008-.1242676-.0036621-.2419434-.0219727-.4819336-.0473633-.7214355-.0090332-.0847168-.0117188-.1704102-.0234375-.2543945-.0444336-.3195801-.1062012-.6359863-.1887207-.9475098-.0158691-.0593262-.0388184-.1157227-.0559082-.1748047-.0722656-.2492676-.1533203-.4954834-.2495117-.7370605-.0412598-.1030273-.0898438-.2019043-.1352539-.3031006-.0859375-.1920166-.1762695-.3814697-.2773438-.5667725-.059082-.1081543-.1220703-.2132568-.1860352-.3186035-.1037598-.1704102-.213623-.3366699-.3303223-.4998779-.0742188-.1036377-.1486816-.2061768-.2277832-.3065186-.043457-.0546875-.0795898-.1135254-.1245117-.1672363l-40-48c-2.2900391-2.7480469-6.125-3.6420898-9.3945313-2.1889648l-72 32c-.0288086.0126953-.0546875.0296631-.083252.0427246-.1687012.0772705-.3322754.1652832-.4956055.2543945-.0864258.0471191-.1757813.0895996-.2600098.1397705-.1948242.1158447-.3828125.2440186-.5681152.3768311-.045166.0322266-.0935059.0598145-.1376953.0927734-.0019531.0014648-.0041504.0026855-.0061035.0041504l-32 24c-.0595703.0446777-.1098633.0981445-.1679688.1442871-.1477051.1171875-.2888184.2397461-.427002.366333-.1152344.1054688-.2287598.2115479-.3369141.322998-.1279297.1317139-.2478027.2686768-.3659668.4083252-.1015625.1201172-.2021484.239624-.2963867.3649902-.1074219.1437988-.2058105.2927246-.3034668.4431152-.0859375.1325684-.1728516.263916-.2507324.401123-.0883789.1552734-.1652832.3156738-.2431641.4765625-.0683594.1416016-.1386719.2814941-.1984863.4267578-.0686035.1665039-.1245117.3376465-.1818848.5089111-.0495605.1479492-.1027832.2940674-.1435547.4449463-.0476074.175293-.0805664.3543701-.1159668.5332031-.0305176.1533203-.0661621.3049316-.0876465.4602051-.0253906.1821289-.0341797.3673096-.0466309.552124-.0107422.15625-.0280762.3110352-.029541.4686279-.0002437.0260012-.0048824.0512698-.0048824.0773928zm16-43.6899414 11.1999512 4.9777832 44.8000488 19.911377v38.4907227l-56-24.8891602zm22.2490234-24.9970703 18.1855469 25.4589844-32.7331543-14.5480957zm105.7509766 55.9799805-56 31.1108398v-37.6967773l56-31.1108398zm-34.2753906-89.5273438 29.9443359 35.9335938-57.3105469 31.8388672-30.1494141-42.2094727z" />
                  <path d="m154.2172852 162.46875c4.0898438-19.5571289 13.7553711-37.5195313 28.2436523-52.0078125 40.5488281-40.5488281 106.5292969-40.5488281 147.078125 0l11.3144531-11.3134766c-46.7890625-46.7880859-122.9179688-46.7880859-169.7070313 0-18.3977051 18.3981934-30.0566406 41.6518555-33.8146973 66.8706055l-3.6745605-3.6748047-11.3144531 11.3134766 16 16c1.5625 1.5620117 3.609375 2.3432617 5.6572266 2.3432617s4.0947266-.78125 5.6572266-2.3432617l16-16-11.3144531-11.3134766z" />
                  <path d="m362.3427734 178.3432617-16 16 11.3144531 11.3134766.1254883-.1254883c-4.0898438 19.5571289-13.7553711 37.5195313-28.2436523 52.0078125-40.5488281 40.5488281-106.5292969 40.5488281-147.078125 0l-11.3144531 11.3134766c23.3945312 23.3940429 54.1240234 35.0908203 84.8535156 35.0908203s61.4589844-11.6967773 84.8535156-35.0908203c18.3977051-18.3981934 30.0566406-41.6518555 33.8146973-66.8706055l3.6745605 3.6748047 11.3144531-11.3134766-16-16c-3.1249999-3.1240234-8.1894531-3.1240234-11.3144531 0z" />
                </g>
              </svg>
              <p className={styles.paragrafo__texto}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sapiente, dicta autem praesentium quidem corporis nihil
                similique voluptatibus expedita explicabo et ipsum voluptatum.
              </p>
            </div>
            <div className={`${styles.paragrafo}`}>
              <svg
                enableBackground="new 0 0 512 512"
                height={512}
                viewBox="0 0 512 512"
                width={512}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m256 230.369c8.551 0 16.533-4.606 20.832-12.022 2.077-3.583.856-8.172-2.728-10.249-3.583-2.078-8.172-.857-10.25 2.727-1.624 2.803-4.634 4.544-7.854 4.544s-6.229-1.741-7.854-4.544c-2.077-3.585-6.665-4.806-10.25-2.727-3.583 2.077-4.805 6.666-2.728 10.249 4.299 7.416 12.281 12.022 20.832 12.022z" />
                <path d="m222.867 188.95c4.142 0 7.5-3.357 7.5-7.5v-8.283c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v8.283c0 4.143 3.358 7.5 7.5 7.5z" />
                <path d="m289.133 188.95c4.142 0 7.5-3.357 7.5-7.5v-8.283c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v8.283c0 4.143 3.358 7.5 7.5 7.5z" />
                <path d="m472.5 397.6h-10.2v-75.334-.001c-.001-22.404-18.229-40.632-40.633-40.632h-41.418c-8.703 0-15.783 7.08-15.783 15.783v17.35h-10.628c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h93.462v68.879c-9.584 2.965-16.567 11.909-16.567 22.455v75.4c0 .169.02.332.025.5h-275.723c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h333.465c12.958 0 23.5-10.542 23.5-23.5v-51.4c0-21.781-17.72-39.5-39.5-39.5zm-93.034-100.184c0-.432.352-.783.783-.783h41.418c11.525 0 21.296 7.647 24.511 18.133h-66.712zm117.534 191.084c0 4.686-3.813 8.5-8.5 8.5h-41.983-.283c-.276 0-.5-.225-.5-.5v-17.634h25.632c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-25.632v-18.133h25.632c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-25.632v-9.633c0-4.687 3.813-8.5 8.5-8.5h18.266c13.509 0 24.5 10.99 24.5 24.5z" />
                <path d="m323.837 329.766c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-10.638v-38.599c18.399-15.092 30.751-37.293 32.82-62.367h9.38c13.271 0 24.067-10.796 24.067-24.066v-33.134c0-5.176-1.648-9.972-4.44-13.902 2.742-2.841 4.44-6.697 4.44-10.948v-8.283c0-13.271-10.796-24.066-24.067-24.066h-.783v-33.917c0-26.974-21.944-48.918-48.917-48.918h-21.492v-1.066c0-8.547-6.953-15.5-15.5-15.5h-25.417c-8.547 0-15.5 6.953-15.5 15.5v1.065h-21.491c-26.973 0-48.918 21.944-48.918 48.918l.001 33.917h-.782c-13.27 0-24.066 10.796-24.066 24.066v8.283c0 4.251 1.697 8.107 4.44 10.948-2.791 3.93-4.44 8.725-4.44 13.901v33.134c0 13.271 10.796 24.067 24.066 24.067h9.382c2.07 25.072 14.42 47.272 32.817 62.363v38.602h-51.265v-17.35c0-8.703-7.08-15.783-15.783-15.783h-41.418c-22.405 0-40.632 18.227-40.633 40.632v.001 75.336h-10.2c-21.78 0-39.5 17.72-39.5 39.5v51.4c0 12.958 10.542 23.5 23.5 23.5h101.534c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-43.793c.005-.168.025-.331.025-.5v-75.4c0-10.545-6.982-19.49-16.566-22.455v-68.879zm40.63-140.033c0 4.999-4.067 9.066-9.067 9.066h-9.067v-51.267h9.087c4.99.011 9.046 4.073 9.046 9.066v33.135zm-58.767-158.168c18.702 0 33.917 15.216 33.917 33.918v33.917h-18.133v-9.066c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-22.275v-67.835zm-62.909-16.065c0-.275.224-.5.5-.5h25.417c.276 0 .5.225.5.5v83.9h-26.417zm-70.408 49.983c0-18.702 15.215-33.918 33.918-33.918h21.491v67.835h-22.275v-9.066c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-18.132zm-24.849 57.984c0-4.999 4.067-9.066 9.066-9.066h198.8c5 0 9.067 4.067 9.067 9.066v8.283c0 .432-.352.783-.783.783h-215.367c-.432 0-.783-.352-.783-.783zm0 66.266v-33.133c0-4.999 4.067-9.066 9.066-9.066h9.067l.001 51.268h-9.068c-4.999-.001-9.066-4.069-9.066-9.069zm33.134 16.571-.001-58.77h150.666v58.77c0 41.538-33.794 75.332-75.333 75.332s-75.332-33.794-75.332-75.332zm33.131 79.847c12.604 6.688 26.967 10.485 42.202 10.485 15.234 0 29.596-3.796 42.199-10.483v28.613h-84.4v-28.615zm-123.466 10.482h41.418c.432 0 .783.352.783.783v17.35h-66.712c3.215-10.486 12.986-18.133 24.511-18.133zm-24.066 134.1h-25.632c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.632v18.133h-25.632c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h25.632v17.634c0 .275-.224.5-.5.5h-.283-41.984c-4.687 0-8.5-3.814-8.5-8.5v-51.4c0-13.51 10.991-24.5 24.5-24.5h18.267c4.687 0 8.5 3.813 8.5 8.5z" />
              </svg>

              <p className={styles.paragrafo__texto}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                sapiente, dicta autem praesentium quidem corporis nihil
                similique voluptatibus expedita explicabo et ipsum voluptatum.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Arrows />
    </ExemploLayout>
  );
}
