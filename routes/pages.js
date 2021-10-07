var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');

/*
 * GET /
 */
router.get('/', function (req, res) {
    
    Page.findOne({slug: 'home'}, function (err, page) {
        if (err)
            console.log(err);

        res.render('index', {
            title: page.title,
            content: page.content
        });
    });
    
});

/*
 * GET a page
 */
router.get('/:slug', function (req, res) {

    var slug = req.params.slug;

    Page.findOne({slug: slug}, function (err, page) {
        if (err)
            console.log(err);
        
        if (!page) {
            res.redirect('/');
        } else {
            res.render('index', {
                title: page.title,
                content: page.content
            });
        }
    });

    
});

router.get('/mongotest',(req,res)=>{
    console.log('yo wassup')
  Page.find({},(err,pages)=>{
      if(err){

        console.log(err)
      }else{
          res.send(pages)
      }
  })
})

// Exports
module.exports = router;


