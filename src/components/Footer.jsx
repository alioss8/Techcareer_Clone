import { useState } from "react";
import { Accordion, Container, Row, Col ,Image,Stack} from "react-bootstrap";
import '../styles/Footer.css'
const Footer = () => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <footer className=" text-white py-4">
      <Container>
        {/* Masaüstünde gösterilecek sütunlar */}
        <Row className="d-none d-md-flex">
          <Col md={2}>
            <h5>Hakkımızda</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Biz Kimiz?</a></li>
              <li><a href="#" className="text-white">Vizyonumuz</a></li>
              <li><a href="#" className="text-white">Misyonumuz</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Hizmetlerimiz</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Web Tasarım</a></li>
              <li><a href="#" className="text-white">SEO</a></li>
              <li><a href="#" className="text-white">Dijital Pazarlama</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Destek</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">İletişim</a></li>
              <li><a href="#" className="text-white">Sıkça Sorulan Sorular</a></li>
              <li><a href="#" className="text-white">Canlı Destek</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Bizi Takip Edin</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <Image src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg"></Image>
            <p>Türkiye’nin teknoloji kariyeri platformu</p>
            <h6>SOSYAL MEDYA</h6>
            <Image src="https://www.techcareer.net/assets/images/footer/linkedin.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/twitter.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/instagram.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/youtube.svg"></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/facebook.svg"></Image>
            
          </Col>
          <hr />
          <Row>
            <Col>
            <Stack direction="horizontal">
            <Image src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=128&q=75"></Image>
            <p className="footer-p">Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26</p>
            </Stack>
            </Col>
          </Row>
        
        </Row>

        {/* Mobilde gösterilecek Accordion */}
        <Accordion activeKey={activeKey} className="d-md-none">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "0" ? null : "0")}>
              Hakkımızda
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Biz Kimiz?</a></li>
                <li><a href="#" className="text-dark">Vizyonumuz</a></li>
                <li><a href="#" className="text-dark">Misyonumuz</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "1" ? null : "1")}>
              Hizmetlerimiz
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Web Tasarım</a></li>
                <li><a href="#" className="text-dark">SEO</a></li>
                <li><a href="#" className="text-dark">Dijital Pazarlama</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "2" ? null : "2")}>
              Destek
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">İletişim</a></li>
                <li><a href="#" className="text-dark">Sıkça Sorulan Sorular</a></li>
                <li><a href="#" className="text-dark">Canlı Destek</a></li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header onClick={() => setActiveKey(activeKey === "3" ? null : "3")}>
              Bizi Takip Edin
            </Accordion.Header>
            <Accordion.Body>
              <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Facebook</a></li>
                <li><a href="#" className="text-dark">Twitter</a></li>
                <li><a href="#" className="text-dark">Instagram</a></li>
              </ul>
              
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Col md={4} className="d-md-none text-center mt-4"  >
        
            <Image src="https://www.techcareer.net/assets/images/common/techcareer-logo.svg" ></Image>
            <p>Türkiye’nin teknoloji kariyeri platformu</p>
            <h6>SOSYAL MEDYA</h6>
            <Stack direction="horizontal" className="text-center">
            <Container   className="text-center mt-2">
            <Image src="https://www.techcareer.net/assets/images/footer/linkedin.svg" style={{width:"50px", height:"50px" }} ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/twitter.svg"  style={{width:"50px", height:"50px"}}   ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/instagram.svg"  style={{width:"50px", height:"50px"}}  ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/youtube.svg"   style={{width:"50px", height:"50px"}}     ></Image>
            <Image src="https://www.techcareer.net/assets/images/footer/facebook.svg"  style={{width:"50px", height:"50px"}}     ></Image>
            </Container>
            </Stack>  

            <hr />
          </Col>
          
          <Row>
            <Col md={12}  className="d-md-none" >
            <Stack direction="vertical">
            <Container  className="text-center mt-2">
            <Image src="https://www.techcareer.net/_next/image?url=%2Fassets%2Fimages%2Ffooter%2Fiskur.png&w=128&q=75" style={{width:"50px", height:"50px"}}></Image>
            <p className="footer-p">Kariyer.net Elektronik Yayıncılık ve İletişim Hizmetleri A.Ş. Özel İstihdam Bürosu olarak 31/08/2024 – 30/08/2027 tarihleri arasında faaliyette bulunmak üzere, Türkiye İş Kurumu tarafından 26/07/2024 tarih ve 16398069 sayılı karar uyarınca 170 nolu belge ile faaliyet göstermektedir. 4904 sayılı kanun uyarınca iş arayanlardan ücret alınmayacak ve menfaat temin edilmeyecektir. Şikayetleriniz için aşağıdaki telefon numaralarına başvurabilirsiniz. Türkiye İş Kurumu İstanbul İl Müdürlüğü: 0212 249 29 87 Türkiye iş Kurumu İstanbul Çalışma ve İş Kurumu Ümraniye Hizmet Merkezi : 0216 523 90 26</p>
            </Container>
            </Stack>
            </Col>
          </Row>
      </Container>
    </footer>
  );
};

export default Footer;
