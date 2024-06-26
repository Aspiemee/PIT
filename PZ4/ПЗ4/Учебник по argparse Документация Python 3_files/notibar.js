
var wpData = {"admin_ajax":"https:\/\/localhost\/","nonce":"b93298062a","isPositionFix":"1","hideCloseButton":"close_button","isDisplayButton":"1","presetColor":"1","alignContent":"center","textColorNotification":"#FAFAFA","textButtonColor":"#ffffff","wp_is_mobile":"","is_customize_preview":"","wp_get_theme":"Sahifa"};

const homeNotificationBar = {
  setPaddingTop() {
    const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
    jQuery('#wpadminbar').css({
      'position': 'fixed'
    })

  },
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },
  getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },
  hideBarWithCookie() {
    const valueCookie = homeNotificationBar.getCookie('njt-close-notibar')
    const hideCloseButton = wpData.hideCloseButton
    if (valueCookie == 'true' && !wpData.is_customize_preview && hideCloseButton == 'close_button') {
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      jQuery('body').css({ 'padding-top': -barHeight })
      if(wpData.wp_get_theme !== 'Divi'){
        jQuery('body').css({
          'position': 'relative',
        })
      }
      jQuery('.njt-nofi-container').remove();
    }

    const toggleCookie = homeNotificationBar.getCookie('njt-toggle-close-notibar')
    if (toggleCookie == 'true' && !wpData.is_customize_preview && hideCloseButton == 'toggle_button') {
      setTimeout(function(){
        jQuery('.njt-nofi-toggle-button').click()
      }, 500);
    }
  },
  actionButtonClose() {
    //Option Close
    jQuery(".njt-nofi-container .njt-nofi-close-button").on("click", function (e) {
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      const wpAdminBarHeight = jQuery('#wpadminbar').length > 0  ? jQuery('#wpadminbar').outerHeight() : 0 ;
      const a = wpAdminBarHeight - barHeight
      jQuery('body').animate({ 'padding-top': 0 }, 1000)
      jQuery('body').css({
        'position': 'relative',
      })
      if (jQuery(".njt-nofi-container").css('position') == 'fixed') {
        jQuery('.njt-nofi-container').animate({ top: a + "px" }, 1000, function() {
          jQuery('.njt-nofi-container .njt-nofi-notification-bar').hide();
        })
      }
      if (jQuery(".njt-nofi-container").css('position') == 'absolute') {
        jQuery('.njt-nofi-container').animate({ top: -barHeight + "px" }, 1000, function() {
          jQuery('.njt-nofi-container .njt-nofi-notification-bar').hide();
        })
      }
      //set cookie
      homeNotificationBar.setCookie('njt-close-notibar', 'true', 1)

      //Custom js for theme
      if(wpData.wp_get_theme == 'Essentials') {
        if (jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar #masthead.pix-header').css({
            'top': '32px'
          })
        } else {
          jQuery('body #masthead.pix-header').css({
            'top': 0
          })
        }
      }
      
      if(wpData.wp_get_theme == 'Nayma'){
        jQuery('.njt-nofi-notification-bar').addClass('njt-nofi-toggle-close');

        if (jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar #masthead .fixed-header').css({
            'top': '32px'
          })
        } else {
          jQuery('body #masthead .fixed-header').css({
            'top': 0
          })
        }
      }

      if(wpData.wp_get_theme == 'Konte'){
        if (jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar #masthead.header-sticky--normal').css({
            'top': 0
          })
          jQuery('body.admin-bar #masthead.header-sticky--normal.sticky').css({
            'top': '32px'
          })
        } else {
          jQuery('body #masthead.header-sticky--normal').css({
            'top': 0
          })
        }
      }

      if(wpData.wp_get_theme == 'Divi'){
        if (jQuery('.admin-bar').length > 0) {
          jQuery('body #main-header').css({
            'top': '32px'
          })
        } else {
          jQuery('body #main-header').css({
            'top': 0
          })
        }

        jQuery('body').css({
          'position': 'unset',
        })
      }

      if(wpData.wp_get_theme == 'AccessPress Parallax Pro Child'){
        if (jQuery('.admin-bar').length > 0) {
          jQuery('header#masthead').css({
            'top': '32px'
          })
        } else {
          jQuery('header#masthead').css({
            'top': 0
          })
          jQuery('#main-header').css({
            'top': 0
          })
        }
      }

      if(wpData.wp_get_theme == 'Uptime Child'){
        jQuery('.navbar').css({
          'top': 0
        })
      }
      
    })


    //Option Toggle Close
    jQuery(".njt-nofi-container .njt-nofi-toggle-button").on("click", function (isCloaseBar) {
      
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      const wpAdminBarHeight = jQuery('#wpadminbar').length > 0  ? jQuery('#wpadminbar').outerHeight() : 0
      const a = wpAdminBarHeight - barHeight
      jQuery('body').animate({ 'padding-top': 0 }, 1000)
      jQuery('body').css({
        'position': 'relative',
      })
      if (jQuery(".njt-nofi-container").css('position') == 'fixed') {
        jQuery('.njt-nofi-container').animate({ top: a + "px" }, 1000, function() {
          jQuery('.njt-nofi-container .njt-nofi-notification-bar').hide();
        })

        //Essentials Theme
        if(wpData.wp_get_theme == 'Essentials') {
          if (jQuery('.admin-bar').length > 0) {
            jQuery('body.admin-bar #masthead.pix-header').css({
              'top': '32px'
            })
          } else {
            jQuery('body #masthead.pix-header').css({
              'top': 0
            })
          }
        }

        if(wpData.wp_get_theme == 'Nayma'){
          jQuery('.njt-nofi-notification-bar').addClass('njt-nofi-toggle-close');

          if (jQuery('.admin-bar').length > 0) {
            jQuery('body.admin-bar #masthead .fixed-header').css({
              'top': '32px'
            })
          } else {
            jQuery('body #masthead .fixed-header').css({
              'top': 0
            })
          }
        }
      }

      if (jQuery(".njt-nofi-container").css('position') == 'absolute') {
        jQuery('.njt-nofi-container').animate({ top: -barHeight + "px" }, 1000, function() {
          jQuery('.njt-nofi-container .njt-nofi-notification-bar').hide();
        })
      }

      jQuery('.njt-nofi-display-toggle').css({
        'display': 'block',
        'top': barHeight,
      })

      //Set Cookie toggle close
      homeNotificationBar.setCookie('njt-toggle-close-notibar', 'true', 1)
    })

    //Option Toggle Opent
    jQuery(".njt-nofi-display-toggle").on("click", function (e) {
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      jQuery('body').animate({ 'padding-top': barHeight }, 1000)
      jQuery('.njt-nofi-display-toggle').css({
        'display': 'none',
        'top': 0,
      })
      if (jQuery(".njt-nofi-container").css('position') == 'fixed') {
        const wpAdminBarHeight = jQuery('#wpadminbar').length > 0  ? jQuery('#wpadminbar').outerHeight() : 0;
        jQuery('.njt-nofi-container .njt-nofi-notification-bar').show();
        jQuery('.njt-nofi-container').animate({ top: wpAdminBarHeight }, 1000)

        //Essentials Theme
        if(wpData.wp_get_theme == 'Essentials') {
          if (jQuery('.admin-bar').length > 0) {
            jQuery('body.admin-bar #masthead.pix-header').css({
              'top': barHeight + 32
            })
          } else {
            jQuery('body #masthead.pix-header').css({
              'top': barHeight
            })
          }
        }

        if(wpData.wp_get_theme == 'Nayma'){
          jQuery('.njt-nofi-notification-bar').removeClass('njt-nofi-toggle-close');
          if (jQuery('.admin-bar').length > 0) {
            jQuery('body.admin-bar #masthead .fixed-header').css({
              'top': barHeight + 32
            })
          } else {
            jQuery('body #masthead .fixed-header').css({
              'top': barHeight
            })
          }
        }
      }

      if (jQuery(".njt-nofi-container").css('position') == 'absolute') {
        jQuery('.njt-nofi-container .njt-nofi-notification-bar').show();
        jQuery('.njt-nofi-container').animate({ top: 0 }, 1000)
      }

       //Set Cookie toggle close
       homeNotificationBar.setCookie('njt-toggle-close-notibar', 'false', 0)
    })
  },
  customStyleBar() {
    const newValue = wpData.hideCloseButton
    if (newValue == 'no_button') {
      jQuery(".njt-nofi-toggle-button").css({
        'display': 'none',
      })
      jQuery(".njt-nofi-close-button").css({
        'display': 'none',
      })
    }

    if (newValue == 'toggle_button') {
      jQuery(".njt-nofi-toggle-button").css({
        'display': 'block',
      })
      jQuery(".njt-nofi-close-button").css({
        'display': 'none',
      })
    }

    if (newValue == 'close_button') {
      jQuery(".njt-nofi-close-button").css({
        'display': 'block',
      })
      jQuery(".njt-nofi-toggle-button").css({
        'display': 'none',
      })
    }

    const textButtonColor = wpData.textButtonColor

    if(textButtonColor) {
      jQuery(".njt-nofi-notification-bar .njt-nofi-button-text").css({
        'color': textButtonColor
      })
    }

    const alignContent = wpData.alignContent
    const width = jQuery(window).width();
    if (alignContent == 'center') {
      jQuery(".njt-nofi-container .njt-nofi-align-content").css({
        'justify-content': 'center'
      })

    }

    if (alignContent == 'right') {
      jQuery(".njt-nofi-container .njt-nofi-align-content").css({
        'justify-content': 'flex-end'
      })
      jQuery(".njt-nofi-container .njt-nofi-align-content").css({
        'text-align': 'right',
        'padding': '10px 30px'
      })
    }

    if (alignContent == 'left') {
      jQuery(".njt-nofi-container .njt-nofi-align-content").css({
        'justify-content': 'flex-start'
      })
      if (width <= 480) {
        jQuery(".njt-nofi-container .njt-nofi-align-content").css({
          'text-align': 'left'
        })
      }
    }

    if (alignContent == 'space_around') {
      jQuery(".njt-nofi-container .njt-nofi-align-content").css({
        'justify-content': 'space-around'
      })
    }

    const textColorNotification = wpData.textColorNotification
    jQuery(".njt-nofi-container .njt-nofi-text-color").css({
      'color': textColorNotification
    })

    //setPositionBar
    homeNotificationBar.setPositionBar()
  },
  windownResizeforCustomize() {
    jQuery(window).on('resize', function () {
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      jQuery('body').css({
        'padding-top': barHeight,
        'position': 'relative'
      })
    });
  },
  setPositionBar() {
    const isPositionFix = wpData.isPositionFix
    const wpAdminBarHeight = jQuery('#wpadminbar').length > 0  ? jQuery('#wpadminbar').outerHeight() : 0
    const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
    if (isPositionFix) {
      jQuery(".njt-nofi-container").css({
        'position': 'fixed',
        'top': wpAdminBarHeight || '0px'
      })
      
      if(wpData.wp_get_theme !== 'Divi'){
        jQuery('body').css({
          'padding-top': barHeight,
          'position': 'relative'
        })
      }
      if(wpData.wp_get_theme == 'Divi Child'){
        jQuery('body').css({
          'padding-top': barHeight,
          'position': 'relative'
        })
      }
    } else {
      jQuery(".njt-nofi-container").css({
        'position': 'absolute',
        'top': 0
      })
      jQuery('body').css({
        'padding-top': barHeight,
        'position': 'relative'
      })
    }
  },
  supportEssentialsTheme() {
    jQuery(window).scroll(function() {
      if(homeNotificationBar.getCookie('njt-close-notibar') != 'true') {
        const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
        if (jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar #masthead.pix-header').css({
            'top': 0
          })
          jQuery('body.admin-bar #masthead.pix-header.is-scroll').css({
            'top': barHeight + 32
          })
        } else {
          jQuery('body #masthead.pix-header').css({
            'top': 0
          })
          jQuery('body #masthead.pix-header.is-scroll').css({
            'top': barHeight
          })
        }
      }else {
        if (jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar #masthead.pix-header.is-scroll').css({
            'top': '32px'
          })
        } else {
          
          jQuery('body #masthead.pix-header.is-scroll').css({
            'top': 0
          })
        }
      }
    });
  },
  supportEnfoldTheme() {
    if(wpData.wp_get_theme == 'Enfold' && jQuery(".njt-nofi-container").css('position') == 'absolute'){
      jQuery(window).bind('mousewheel', function(event) {
        console.log(wpData.wp_get_theme);
        if (event.originalEvent.wheelDelta < 0) {
          if(jQuery('.admin-bar').length > 0) {
            jQuery('body header.header-scrolled').css({
              'top': '32px'
            })
          } else {
            jQuery('body header.header-scrolled').css({
              'top': 0
            })
          }
        } else {
          jQuery('body header.av_header_border_disabled').css({
            'top': 'unset'
          })
          if(jQuery('.admin-bar').length > 0) {
            jQuery('body header.header-scrolled').css({
              'top': '32px'
            })
          } else {
            jQuery('body header.header-scrolled').css({
              'top': 0
            })
          }
        }
      });
    }
  },
  supportNaymaTheme() {
    if(wpData.wp_get_theme == 'Nayma' && jQuery(".njt-nofi-container").css('position') == 'fixed'){
      jQuery(window).bind('mousewheel', function(event) {
        let barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
        if(jQuery('.njt-nofi-notification-bar').hasClass('njt-nofi-toggle-close')){
          barHeight = 0
        }
        
        if (event.originalEvent.wheelDelta < 0) {
          if(jQuery('.admin-bar').length > 0) {
            jQuery('body header .fixed-header').css({
              'top': barHeight + 32
            })
          } else {
            jQuery('body header .fixed-header').css({
              'top': barHeight
            })
          }
        }
      });
    }
  },
  supportKonteTheme() {
    if(wpData.wp_get_theme == 'Konte' && jQuery(".njt-nofi-container").css('position') == 'fixed'){
      jQuery(window).bind('mousewheel', function(event) {
        let barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
        var valueCookie = homeNotificationBar.getCookie('njt-close-notibar')
        if (valueCookie == 'true'){
            if(jQuery('.admin-bar').length > 0) {
              if(jQuery('body header#masthead.header-sticky--normal').hasClass('sticky')) {
                jQuery('body header#masthead.header-sticky--normal').css({
                  'top': 32
                })
              } else {
                jQuery('body header#masthead.header-sticky--normal').css({
                  'top': 0
                })
              }
            } else {
              jQuery('body header#masthead.header-sticky--normal').css({
                'top': 0
              })
            }
        }else {
          if (event.originalEvent.wheelDelta < 0) {
            if(jQuery('.admin-bar').length > 0) {
              jQuery('body header#masthead.header-sticky--normal.sticky').css({
                'top': barHeight + 32
              })
            } else {
              jQuery('body header#masthead.header-sticky--normal.sticky').css({
                'top': barHeight
              })
            }
          } else {
            if(jQuery('.admin-bar').length > 0) {
              if(jQuery('body header#masthead.header-sticky--normal').hasClass('sticky')) {
                jQuery('body header#masthead.header-sticky--normal').css({
                  'top': barHeight+32
                })
              } else {
                jQuery('body header#masthead.header-sticky--normal').css({
                  'top': barHeight
                })
              }
            } else {
              jQuery('body header#masthead.header-sticky--normal.sticky').css({
                'top': barHeight
              })
            }
          }
        }
      });
    }
  },
  supportDiviTheme() {
    if(wpData.wp_get_theme == 'Divi'){
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      setTimeout(function(){
        if(jQuery('.admin-bar').length > 0) {
          jQuery('header#main-header').css({
            'top': barHeight + 32
          })
        } else {
          jQuery('header#main-header').css({
            'top': barHeight
          })
        }
      }, 1000);
      jQuery('body').animate({ 'padding-top': barHeight }, 1000)
      jQuery('body').css({
        'position': 'relative',
      })

      if (jQuery('.njt-nofi-notification-bar').is(":visible")) {
        if(jQuery('.admin-bar').length > 0) {
          jQuery('.et_pb_section_0_tb_header').css({
            'top': '32px'
          })
          jQuery('.et_pb_section_1_tb_header').css({
            'top': '62px'
          })
  
          jQuery('.et_pb_section_0_tb_header.et_pb_sticky--top').css({
            'top': '66px'
          })
          jQuery('.et_pb_section_1_tb_header.et_pb_sticky--top').css({
            'top': '96px'
          })
        } else {
          jQuery('.et_pb_section_0_tb_header').css({
            'top': '0px'
          })
          jQuery('.et_pb_section_1_tb_header').css({
            'top': '30px'
          })
  
          jQuery('.et_pb_section_0_tb_header.et_pb_sticky--top').css({
            'top': '34px'
          })
          jQuery('.et_pb_section_1_tb_header.et_pb_sticky--top').css({
            'top': '64px'
          })
        }
        
      } else {
        if(jQuery('.admin-bar').length > 0) { 
          jQuery('.et_pb_section_0_tb_header').css({
            'top': '32px'
          })
          jQuery('.et_pb_section_1_tb_header').css({
            'top': '62px'
          })
  
          jQuery('.et_pb_section_0_tb_header.et_pb_sticky--top').css({
            'top': '32px'
          })
          jQuery('.et_pb_section_1_tb_header.et_pb_sticky--top').css({
            'top': '62px'
          })
        } else {
          jQuery('.et_pb_section_0_tb_header').css({
            'top': '0px'
          })
          jQuery('.et_pb_section_1_tb_header').css({
            'top': '30px'
          })
  
          jQuery('.et_pb_section_0_tb_header.et_pb_sticky--top').css({
            'top': '0px'
          })
          jQuery('.et_pb_section_1_tb_header.et_pb_sticky--top').css({
            'top': '30px'
          })
        }
        
      }
     
    }
  },
  supportAccessPressParallaxTheme() {
    if(wpData.wp_get_theme == 'AccessPress Parallax Pro Child'){
      console.log(wpData.wp_get_theme);
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      setTimeout(function(){
        if(jQuery('.admin-bar').length > 0) {
          jQuery('header#masthead').css({
            'top': barHeight + 32
          })
        } else {
          jQuery('header#masthead').css({
            'top': barHeight
          })
        }
      }, 1000);
      
      var lastScrollTop = 0;
      jQuery(window).on('scroll', function() {
        if(homeNotificationBar.getCookie('njt-close-notibar') != 'true') {
          st = jQuery(this).scrollTop();
          if(st < lastScrollTop) {
            
          } else {
            jQuery('#main-header.menu-fix').css({
              'top': barHeight
            })
          }
          lastScrollTop = st;
        }
      });
    }
  },
  supportUncodeTheme() {
    if(wpData.wp_get_theme == 'Uncode'){
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      setTimeout(function(){
        jQuery('body').css({
          'padding-top': barHeight
        })
      }, 1500);
      jQuery(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta < 0) {
          setTimeout(function(){
            jQuery('body').css({
              'padding-top': barHeight
            })
          }, 1000);
         
        } else {
          setTimeout(function(){
            jQuery('body').css({
              'padding-top': barHeight
            })
          }, 1000);
        }
      })
    }
  },
  supportUptimeChildTheme() {
    if(wpData.wp_get_theme == 'Uptime Child' && jQuery(".njt-nofi-container").css('position') == 'fixed'){
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      jQuery(window).bind('mousewheel', function(event) {
        if(homeNotificationBar.getCookie('njt-close-notibar') != 'true') {
          if (event.originalEvent.wheelDelta < 0) {
            jQuery('.navbar.scrolled').css({
              'top': barHeight
            })
          } else {
            jQuery('.navbar').css({
              'top': 0
            })
            jQuery('.navbar.scrolled').css({
              'top': barHeight
            })
          }
        }
      })
    }
  },
  supportThemifyUltraTheme() {
    if(wpData.wp_get_theme == 'Themify Ultra'){
      const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
      if(jQuery('.njt-nofi-notification-bar').is(':visible')) {
        jQuery('#headerwrap').css({
          'top': '88px'
        })
      }
      if (jQuery('#wpadminbar').length > 0 ) {
        jQuery(window).bind('mousewheel', function(event) {
          if(jQuery('.njt-nofi-notification-bar').is(':visible')) {
            if (event.originalEvent.wheelDelta < 0) {
              jQuery('#headerwrap.tf_box.tf_w').css({
                'top': '88px'
              })
              jQuery('#headerwrap.tf_box.tf_w.fixed-header').css({
                'top': '32px'
              })
            
            } else {
              jQuery('#headerwrap.tf_box.tf_w').css({
                'top': '88px'
              })
              jQuery('#headerwrap.tf_box.tf_w.fixed-header').css({
                'top': '32px'
              })
             
            }
          } else {
            jQuery('#headerwrap').css({
              'top': '32px'
            })
          }
        })
      } else {
        
        jQuery(window).bind('mousewheel', function(event) {
          if(jQuery('.njt-nofi-notification-bar').is(':visible')) {
            if (event.originalEvent.wheelDelta < 0) {
              jQuery('#headerwrap.tf_box.tf_w').css({
                'top': '56px'
              })
              jQuery('#headerwrap.tf_box.tf_w.fixed-header').css({
                'top': '0px'
              })
            } else {
              jQuery('#headerwrap.tf_box.tf_w').css({
                'top': '56px'
              })
              jQuery('#headerwrap.tf_box.tf_w.fixed-header').css({
                'top': '0px'
              })
            
            }
          } else {
            jQuery('#headerwrap').css({
              'top': '0px'
            })
          }
        })
      }
      
    }
  }
}

jQuery(document).ready(() => {
  homeNotificationBar.hideBarWithCookie();
  homeNotificationBar.setPaddingTop();
  homeNotificationBar.actionButtonClose();
  homeNotificationBar.customStyleBar();
  homeNotificationBar.supportEnfoldTheme();
  homeNotificationBar.supportNaymaTheme();
  homeNotificationBar.supportKonteTheme();
  homeNotificationBar.supportDiviTheme();
  homeNotificationBar.supportAccessPressParallaxTheme();
  homeNotificationBar.supportUncodeTheme();
  homeNotificationBar.supportUptimeChildTheme();
  homeNotificationBar.supportThemifyUltraTheme();
  if (wpData.is_customize_preview) {
    homeNotificationBar.windownResizeforCustomize()
  }
  if(wpData.wp_get_theme == 'Essentials') {
    const barHeight = jQuery('.njt-nofi-notification-bar').outerHeight();
    if(wpData.hideCloseButton == 'close_button') {
      if(wpData.isPositionFix) {
        homeNotificationBar.supportEssentialsTheme();
      }
    } else {
      if(wpData.isPositionFix) {
        if(jQuery('.admin-bar').length > 0) {
          jQuery('body.admin-bar header#masthead').css({
            'top': barHeight + 32
          })
        } else {
          jQuery('body header#masthead').css({
            'top': barHeight
          })
        }
      }
    }
    if(!wpData.isPositionFix) {
      jQuery(window).bind('mousewheel', function(event) {
        if (event.originalEvent.wheelDelta < 0) {
          jQuery('body.admin-bar #masthead.pix-header.is-scroll').css({
            'top': '32px'
          })
        } else {
          jQuery('body.admin-bar #masthead.pix-header').css({
            'top': '0'
          })
          jQuery('body.admin-bar #masthead.pix-header.is-scroll').css({
            'top': '32px'
          })
        }
      });
    }
  }
})
