import hero from '../components/hero_item';
import categories from '../components/categories';
import featured from '../components/featured_product';
import banner from '../components/banner';
import product from '../components/lastest_product';

function home(){
    return(
        <>
        /* Hero Section Begin */
        <section class="hero">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hero__categories">
                            <div class="hero__categories__all">
                                <i class="fa fa-bars"></i>
                                <span>All departments</span>
                            </div>
                            <ul>
                                <li><a href="#">Fresh Meat</a></li>
                                <li><a href="#">Vegetables</a></li>
                                <li><a href="#">Fruit & Nut Gifts</a></li>
                                <li><a href="#">Fresh Berries</a></li>
                                <li><a href="#">Ocean Foods</a></li>
                                <li><a href="#">Butter & Eggs</a></li>
                                <li><a href="#">Fastfood</a></li>
                                <li><a href="#">Fresh Onion</a></li>
                                <li><a href="#">Papayaya & Crisps</a></li>
                                <li><a href="#">Oatmeal</a></li>
                                <li><a href="#">Fresh Bananas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-9">
                        <div class="hero__search">
                            <div class="hero__search__form">
                                <form action="#">
                                    <div class="hero__search__categories">
                                        All Categories
                                        <span class="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?"/>
                                    <button type="submit" class="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div class="hero__search__phone">
                                <div class="hero__search__phone__icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                                /* Hero_item Section Start */
                                <hero></hero> 
                                /* Hero_item Section End */
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* Hero Section End */

        /* Categories Section Begin */
        <categories></categories>
        /* Categories Section End */

        /* Featured Section Begin */
        <featured></featured>
        /* Featured Section End */

        /* Banner Begin */
        <banner></banner>
        /* Banner End */
    
        /* Latest Product Section Begin */
        <section class="latest-product spad">
            <div class="container">
                <div class="row">
                <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Latest Product</h4>
                            <product></product>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <product></product>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Review Products</h4>
                            <product></product>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* Latest Product Section End */
    
        /* Blog Section Begin */
        <section class="from-blog spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <blog></blog>
                </div>
            </div>
        </section>
        /* Blog Section End */
        </>
    );
}

export default home;