'use client'

import Script from 'next/script'

export default function Analytics() {
    return (
        <>
            {/* Google Analytics 4 */}
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'GA_MEASUREMENT_ID', {
                        page_title: document.title,
                        page_location: window.location.href,
                        custom_map: {
                            'custom_parameter_1': 'estetica_mcma',
                            'custom_parameter_2': 'villa_ballester',
                            'custom_parameter_3': 'buenos_aires'
                        }
                    });
                    
                    // Enhanced Ecommerce para tratamientos estéticos
                    gtag('config', 'GA_MEASUREMENT_ID', {
                        custom_map: {
                            'custom_parameter_4': 'tratamiento_facial',
                            'custom_parameter_5': 'tratamiento_corporal',
                            'custom_parameter_6': 'medicina_estetica'
                        }
                    });
                `}
            </Script>

            {/* Google Tag Manager */}
            <Script id="google-tag-manager" strategy="afterInteractive">
                {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-XXXXXXX');
                `}
            </Script>

            {/* Facebook Pixel */}
            <Script id="facebook-pixel" strategy="afterInteractive">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', 'YOUR_PIXEL_ID');
                    fbq('track', 'PageView');
                    
                    // Eventos personalizados para estética
                    fbq('track', 'ViewContent', {
                        content_name: 'Estética MCMA',
                        content_category: 'Centro de Belleza',
                        content_type: 'website',
                        value: 0.00,
                        currency: 'ARS'
                    });
                `}
            </Script>

            {/* LinkedIn Insight Tag */}
            <Script id="linkedin-insight" strategy="afterInteractive">
                {`
                    _linkedin_partner_id = "YOUR_LINKEDIN_ID";
                    window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                    window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                    (function(l) {
                    if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                    window.lintrk.q=[]}
                    var s = document.getElementsByTagName("script")[0];
                    var b = document.createElement("script");
                    b.type = "text/javascript";b.async = true;
                    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                    s.parentNode.insertBefore(b, s);})(window.lintrk);
                `}
            </Script>

            {/* Twitter Pixel */}
            <Script id="twitter-pixel" strategy="afterInteractive">
                {`
                    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
                    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
                    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
                    twq('config','YOUR_TWITTER_PIXEL_ID');
                    twq('track','PageView');
                `}
            </Script>

            {/* Hotjar para análisis de comportamiento */}
            <Script id="hotjar" strategy="afterInteractive">
                {`
                    (function(h,o,t,j,a,r){
                        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
                        a=o.getElementsByTagName('head')[0];
                        r=o.createElement('script');r.async=1;
                        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                        a.appendChild(r);
                    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                `}
            </Script>

            {/* Microsoft Clarity para análisis de UX */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
                {`
                    (function(c,l,a,r,i,t,y){
                        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
                `}
            </Script>

            {/* Google Tag Manager (noscript) */}
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>

            {/* Facebook Pixel (noscript) */}
            <noscript>
                <img
                    height="1"
                    width="1"
                    style={{ display: 'none' }}
                    src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
                    alt="Facebook Pixel"
                />
            </noscript>

            {/* Eventos personalizados para conversiones */}
            <Script id="custom-events" strategy="afterInteractive">
                {`
                    // Evento de reserva de cita
                    function trackBooking(service, value) {
                        gtag('event', 'begin_checkout', {
                            currency: 'ARS',
                            value: value,
                            items: [{
                                item_id: service,
                                item_name: service,
                                item_category: 'Tratamiento Estético',
                                price: value,
                                quantity: 1
                            }]
                        });
                        
                        fbq('track', 'InitiateCheckout', {
                            content_name: service,
                            content_category: 'Tratamiento Estético',
                            value: value,
                            currency: 'ARS'
                        });
                    }
                    
                    // Evento de contacto por WhatsApp
                    function trackWhatsAppContact() {
                        gtag('event', 'contact', {
                            method: 'WhatsApp',
                            content_category: 'Contacto'
                        });
                        
                        fbq('track', 'Contact', {
                            content_name: 'Contacto WhatsApp',
                            content_category: 'Contacto'
                        });
                    }
                    
                    // Evento de visualización de servicios
                    function trackServiceView(service) {
                        gtag('event', 'view_item', {
                            currency: 'ARS',
                            items: [{
                                item_id: service,
                                item_name: service,
                                item_category: 'Tratamiento Estético'
                            }]
                        });
                        
                        fbq('track', 'ViewContent', {
                            content_name: service,
                            content_category: 'Tratamiento Estético'
                        });
                    }
                    
                    // Evento de scroll profundo
                    function trackDeepScroll() {
                        let scrollDepth = 0;
                        window.addEventListener('scroll', () => {
                            const scrollTop = window.pageYOffset;
                            const docHeight = document.body.offsetHeight;
                            const winHeight = window.innerHeight;
                            const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
                            
                            if (scrollPercent > 50 && scrollDepth < 50) {
                                scrollDepth = 50;
                                gtag('event', 'scroll', {
                                    event_category: 'Engagement',
                                    event_label: '50% Scroll'
                                });
                            } else if (scrollPercent > 75 && scrollDepth < 75) {
                                scrollDepth = 75;
                                gtag('event', 'scroll', {
                                    event_category: 'Engagement',
                                    event_label: '75% Scroll'
                                });
                            } else if (scrollPercent > 90 && scrollDepth < 90) {
                                scrollDepth = 90;
                                gtag('event', 'scroll', {
                                    event_category: 'Engagement',
                                    event_label: '90% Scroll'
                                });
                            }
                        });
                    }
                    
                    // Evento de tiempo en página
                    function trackTimeOnPage() {
                        let startTime = Date.now();
                        window.addEventListener('beforeunload', () => {
                            const timeSpent = Math.round((Date.now() - startTime) / 1000);
                            gtag('event', 'timing_complete', {
                                name: 'page_view',
                                value: timeSpent
                            });
                        });
                    }
                    
                    // Inicializar tracking
                    document.addEventListener('DOMContentLoaded', () => {
                        trackDeepScroll();
                        trackTimeOnPage();
                        
                        // Tracking de enlaces externos
                        document.querySelectorAll('a[href^="http"]').forEach(link => {
                            link.addEventListener('click', () => {
                                gtag('event', 'click', {
                                    event_category: 'Outbound',
                                    event_label: link.href
                                });
                            });
                        });
                    });
                    
                    // Hacer funciones disponibles globalmente
                    window.trackBooking = trackBooking;
                    window.trackWhatsAppContact = trackWhatsAppContact;
                    window.trackServiceView = trackServiceView;
                `}
            </Script>
        </>
    )
}
