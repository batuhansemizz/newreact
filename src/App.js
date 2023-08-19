import './App.css';
import Course from './Course';
import React from './img/indir (1).png'
import Vue from './img/indir (2).png'
import Angular from './img/indir (3).png'
import Bootsrap from './img/indir.png'
import 'bulma/css/bulma.css'


function App() {
  return (
    <div className="App">
          <section class="hero is-link">
            <div class="hero-body">
              <p class="title">
                Kurslarım 
              </p>
           
            </div>
          </section>
          <section className='section'>
            <div className='container'>
         <div className='columns'>
           <div className='column'>
               <Course 
                image= {Angular}
                title="Angular"
                description="Angular, Google tarafından geliştirilen bir JavaScript çerçevesidir. Büyük ölçekli uygulamalar geliştirmek için kullanılır. Tek sayfa uygulamalar (SPA) oluşturmak için geniş bir özellik setine sahiptir. TypeScript tabanlıdır ve kesin tip denetimi sağlar. Zengin modülerlik, veri bağla"
                
              />
           </div>
           <div className='column'>
                <Course
                  image ={React}
                  title="React:js"
                  description="React, Facebook tarafından oluşturulan bir JavaScript kütüphanesidir. Kullanıcı arayüzleri oluşturmak için kullanılır. React, bileşen tabanlı bir yaklaşım sunar, bu da kullanıcı arayüzünü bağımsız bileşenlere ayırmanıza olanak tanır. Virtual DOM sayesinde verimli bir"
                  />
           </div>
           <div className='column'>
               <Course 
                image={Vue}
                title="Vue.JS"
                description="Vue, hafif ve esnek bir JavaScript çerçevesidir. İki yönlü veri bağlama, bileşen tabanlı yapı gibi modern özellikleri basit ve anlaşılır bir şekilde sunar. Vue, yavaşça benimseyebilirsiniz, yani mevcut projelerinize kolayca entegre edebilirsiniz. Ayrıca, belirli bir parçayı "
                />
           </div>
           <div className='column'>
              <Course
              image={Bootsrap}
              title="Bootstrap"
              description="Bootstrap, popüler bir açık kaynaklı CSS çerçevesidir ve web siteleri ile web uygulamalarının hızlı ve düzenli bir şekilde tasarlanmasını kolaylaştırmak için kullanılır. İlk olarak Twitter tarafından geliştirilmiş olup daha sonra geniş bir topluluk tarafından desteklenmeye başlamıştır"
              />
            
           </div>
         </div>
     </div>
          </section>
     



   
    
   
    
    </div>
  );
}

export default App;
