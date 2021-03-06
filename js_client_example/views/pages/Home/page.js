export default class Home{

    constructor(elm,renderCallback = null,beforeRender = null){
        this.beforeRender = beforeRender
        this.renderCallback = renderCallback;
        this.referance = elm;
    }

    loadCss(){
        const styles = [
            'views/pages/Home/page.css?v='+(new Date).getTime()
        ];
         
        //render css elements to dom
        styles.forEach(el=>{
            const link = document.createElement('link');
            link.href = el;
            link.dataset.type='page';
            link.rel  = 'stylesheet';
            document.querySelector('head').appendChild(link);
        });
    }

    async render(){
        this.referance.innerHTML = '';
        //trigger before render if is exist 
        if(this.beforeRender !== null) await this.beforeRender();
        this.loadCss();
        //render page
        this.referance.innerHTML = `<section class="main_section fade-in">
                                        I m home
                                    </section>`;

        await this.afterRender();
    }


    async afterRender(){
       
        if(this.renderCallback !== null) this.renderCallback(this.referance);
    }


}

