import { 
    trigger,
    state,
    animate,
    transition,
    style,
    keyframes,
    group
  } from '@angular/animations';

const appAnimations = [
    trigger('divState',[
      state('normal', style({
        backgroundColor:'red',
        transform:'translateX(0)'
      })),
      state('high', style({
        backgroundColor:'blue',
        transform:'translateX(100px)'
      })),
      transition('normal => high', animate(200)), // Can use <=> if the state swith is with equal speed
      transition('high => normal', animate(900))
    ]),
    trigger('wildState',[
      state('normal', style({
        backgroundColor:'red',
        transform:'translateX(0)'
      })),
      state('high', style({
        backgroundColor:'blue',
        transform:'translateX(100px)'
      })),
      state('shrunken',style({
        backgroundColor:'green',
        transform:'translateX(0) scale(0.5)'
      })),
      transition('normal <=> high', animate(1000)), 
      transition('* <=> shrunken', [
        style({
          backgroundColor:'black'
        }),
        animate(1000, style({
          borderRadius:'50px'
        })),
        animate(500)
      ]), 
    ]),
    trigger('list1',[      
      transition('void => *', [
        style({
          transform:'translateX(-100px)',
          opacity:0,
        }),
        animate(1000)
      ]),
      transition("* => void",[
        animate(1000, style({
          transform:'translateX(100px)',
          opacity:0
        }))
      ])    
    ]),
    trigger('list2',[      
      transition('void => *', [        
        animate(1000, keyframes([
          style({
            transform:'translateX(-100px)',
            opacity:0
          }),
          style({
            transform:'translateX(-50px)',
            opacity:0.5
          }),
          style({
            transform:'translateX(-20px)',
            opacity:0.7
          }),
          style({
            transform:'translateX(0)',
            opacity:1
          })

        ]))
      ]),
      transition("* => void",[
        group([
          animate(300,style({
            color:'pink'
          })),
          animate(800,style({
            transform:'translateX(120px)',
            opacity:0
          }))
        ])
      ])    
    ]),
  ];

  export {appAnimations}