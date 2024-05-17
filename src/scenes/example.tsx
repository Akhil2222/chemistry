import {Line, Latex, Txt, Rect, Circle, makeScene2D, Img, Layout} from '@motion-canvas/2d';
import {waitFor, all, delay, chain, sequence, tween, createRef} from '@motion-canvas/core';

import chocolate from '../photos/chocolate.png'
import sugar from '../photos/sugar.png'
import cracker from '../photos/cracker.png'
import marshmallow from '../photos/marshmallow.png'
import smore from '../photos/smore.png'

export default makeScene2D(function* (view) {
  // Create your animations here

  const smorePic = createRef<Img>();
  const smoreMult = createRef<Txt>();
  const equals = createRef<Txt>()
  const ingredientsA = createRef<Layout>();
  const ingredientsB = createRef<Layout>();
  const conversion = createRef<Layout>();
  const quantity = createRef<Layout>();
  const divider1 = createRef<Line>(), divider2 = createRef<Line>();
  const production = createRef<Layout>();
  const smoreCount = 15;
  const stoichHeader = createRef<Txt>();
  const stoichCommenter = createRef<Txt>();
  const dxGraham = createRef<Layout>();
  const limitEx = createRef<Layout>();
  const chemicalEquation1 = createRef<Layout>();
  const chemicalOutline = createRef<Rect>();
  const chemicalQuantities = createRef<Layout>();
  const dimensionalAnalysis = createRef<Layout>()
  view.add(
  <>
    <>
      <Rect width={'100%'} height={'100%'} fill={"#444444"}></Rect>
      <Line ref={divider1} points={[[-1000,-300], [-1000, -300]]} stroke={'#666666'} lineWidth={4} lineDash={[20,20]}/>
      <Line ref={divider2} points={[[-400, -700], [-400, -700]]} stroke={'#666666'} lineWidth={4}/>

    </>
    <Layout ref={conversion}>
      <Img src={smore} ref={smorePic} position={[150,0]} opacity={0}/>
      <Txt fill={'white'} scale={4} position={[-220,90]} ref={equals} opacity={0}>=</Txt>
      <Txt fill={'white'} scale={4} position={[-700,90]} textAlign={'right'} ref={smoreMult} opacity={0}>2</Txt>
      <Layout ref={ingredientsA}>
        <Layout opacity={0} position={[-70,0]}>
          <Txt fill={'white'} scale={3} textAlign={'end'} position={[0,93]}>1</Txt>
          <Img src={chocolate} scale={0.3} position={[230,67]}/>
        </Layout>
        <Layout position={[420,100]} opacity={0}>
          <Txt fill={'white'} scale={3} position={[0,0]}>2</Txt>
          <Img src={marshmallow} scale={0.5} position={[270, 0]}/>
        </Layout>
      </Layout>
      <Layout ref={ingredientsB} position={[150,220]}>
        <Layout position={[-230,0]} opacity={0}>
          <Txt fill={'white'} scale={3} position={[0,20]}>4</Txt>
          <Img src={cracker} scale={0.19} position={[190, 0]}/>
        </Layout>
        <Layout position={[280,0]} opacity={0}>
          <Txt fill={'white'} scale={3} position={[0,0]}>1</Txt>
          <Img src={sugar} scale={0.5} position={[190, 0]}/>
        </Layout>
      </Layout>
    </Layout>
    <Layout ref={quantity}>
      <Layout opacity={0} position={[-620,-220]}>
        <Txt fill={'white'} scale={2} position={[-170,90]}>24</Txt>
        <Img src={chocolate} scale={0.2} position={[0,67]}/>
      </Layout>
      <Layout opacity={0} position={[-790,20]}>
        <Txt fill={'white'} scale={2} position={[0,0]}>36</Txt>
        <Img src={marshmallow} scale={0.33} position={[190, 0]}/>
      </Layout>
      <Layout position={[-790,190]} opacity={0}>
        <Txt fill={'white'} scale={2} position={[0,0]}>60</Txt>
        <Img src={cracker} scale={0.13} position={[140, -10]}/>
      </Layout>
      <Layout position={[-790,360]} opacity={0}>
        <Txt fill={'white'} scale={2} position={[0,0]}>60</Txt>
        <Img src={sugar} scale={0.33} position={[140, 0]}/>
      </Layout>
    </Layout>
    
    <Layout ref={production} position={[0,-300]}>
      {
        Array(smoreCount).fill(1).map((_,b)=><Layout opacity={0}>
          <Img src={smore} position={[(b%5)*160,Math.floor(b/5)*80]} rotation={30}/>
          <Img src={smore} position={[(b%5)*160+80,Math.floor(b/5)*80]} rotation={30}/>
        </Layout>)
      }
    </Layout>
    <Txt ref={stoichHeader} fill={'white'} scale={3} position={[260,-400]}></Txt>
    <Txt ref={stoichCommenter} textAlign={'center'} fill={"red"} position={[260,400]}></Txt>
    <Layout ref={dxGraham}>
      <Txt fill={'orange'} position={[-780,420]} opacity={0}>-15</Txt>
      <Txt fill={'orange'} position={[-780,255]} opacity={0}>-60</Txt>
      <Txt fill={'orange'} position={[-780,85]} opacity={0}>-30</Txt>
      <Txt fill={'orange'} position={[-780,-70]} opacity={0}>-15</Txt>
    </Layout>
    <Layout ref={limitEx} opacity={0}>
      <Rect position={[-700,180]} stroke={'red'} lineWidth={5} width={280} height={140}></Rect>
      <Txt scale={0.6} position={[-700,92]} fill={'red'}>Limiting Reactant</Txt>
    </Layout>

    <Rect fill={'#334466'} width={1420} height={100} ref={chemicalOutline} opacity={0}></Rect>
    <Layout ref={chemicalEquation1}>
      <Layout position={[-500,0]} opacity={0}>
        <Txt scale={2} fill={"white"} position={[-150,10]}>2</Txt>
        <Latex tex={"\\color{#2ba756}NaCl"} height={66}/>
      </Layout>
      <Layout position={[-190,0]} opacity={0}>
        <Txt fill={"white"} scale={2} position={[-150,10]}>+</Txt>
        <Latex tex={"\\color{#996370}CaBr_2"} height={66}/>
      </Layout>
      <Txt scale={2} fill={"white"} position={[0,10]} opacity={0}>⟶</Txt>
      <Layout position={[270,0]} opacity={0}>
        <Txt fill={"white"} position={[-155, 10]} scale={2}>2</Txt>
        <Latex tex={"\\color{#2ba370}NaBr"} height={66}/>
      </Layout>
      <Layout position={[580,0]} opacity={0}>
        <Txt fill={"white"} scale={2} position={[-150,10]}>+</Txt>
        <Latex tex={"\\color{#996756}CaCl_2"} height={66}/>
      </Layout>
    </Layout>
    <Layout ref={chemicalQuantities} position={[175,-100]}>
      <Layout opacity={0}>
        <Txt scale={2} fill={"white"} position={[-350,5]}>10 (mol)</Txt>
        <Latex tex={"\\color{#2ba756}NaCl"} height={90}/>
      </Layout>
      <Layout opacity={0}>
        <Txt scale={2} fill={"white"} position={[-350,5]}>10 (mol)</Txt>
        <Latex tex={"\\color{#996670}CaBr_2"} height={90}/>
      </Layout>
      <Layout opacity={0}>
        <Txt scale={2} fill={"white"} position={[-320,5]}>? (mol)</Txt>
        <Latex tex={"\\color{#996756}CaCl_2"} height={90}/>
      </Layout>
      <Layout opacity={0}>
        <Txt scale={2} fill={"white"} position={[-330,5]}>? (mol)</Txt>
        <Latex tex={"\\color{#2ba370}NaBr"} height={90}/>
      </Layout>
      
    </Layout>
    <Layout ref={dimensionalAnalysis}>
      <Layout position={[-640,-200]} opacity={0}>
        <Layout opacity={1} scale={0.33}>
          <Txt scale={2} fill={"white"} position={[-350,5]}>10 mol</Txt>
          <Latex tex={"\\color{#2ba756}NaCl"} height={90}/>
        </Layout>
        <Layout opacity={1} scale={0.33} position={[0, 120]} >
          <Txt scale={2} fill={"white"} position={[-350,5]}>10 mol</Txt>
          <Latex tex={"\\color{#2ba756}NaCl"} height={90}/>
        </Layout>
      </Layout>
      <Latex opacity={0} position={[-395,-200]} tex={'\\color{white}*\\frac{\\text{2mol }\\color{#2ba370}NaBr}{\\text{2mol }\\color{#2ba756}NaCl} = \\text{10mol } \\color{#2ba370}NaBr'} height={60}/>
      <Latex opacity={0} position={[-395,-80]} tex={'\\color{white}*\\frac{\\text{1mol }\\color{#996756}CaCl_2}{\\text{2mol }\\color{#2ba756}NaCl} = \\text{5mol } \\color{#996756}CaCl_2'} height={60}/>
      <Layout position={[-640,60]} opacity={0}>
        <Layout opacity={1} scale={0.33}>
          <Txt scale={2} fill={"white"} position={[-350,5]}>10 mol</Txt>
          <Latex tex={"\\color{#996370}CaBr_2"} height={90}/>
        </Layout>
        <Layout opacity={1} scale={0.33} position={[0, 120]}>
          <Txt scale={2} fill={"white"} position={[-350,5]}>10 mol</Txt>
          <Latex tex={"\\color{#996370}CaBr_2"} height={90}/>
        </Layout>
      </Layout>
      <Latex position={[-395,60]} tex={'\\color{white}*\\frac{\\text{2mol }\\color{#2ba370}NaBr}{\\text{1mol }\\color{#996370}CaBr_2} = \\text{20mol } \\color{#2ba370}NaBr'} height={60} opacity={0}/>
      <Latex position={[-395,180]} tex={'\\color{white}*\\frac{\\text{1mol }\\color{#996756}CaCl_2}{\\text{1mol }\\color{#996370}CaBr_2} = \\text{10mol } \\color{#996756}CaCl_2'} height={60} opacity={0}/>
      <Layout scale={3} position={[400, -200]} opacity={0}>
        <Latex tex={"\\color{white}\\text{10 mol }{\\color{#2ba370}NaBr} < \\text{20 mol }{\\color{#2ba370}NaBr} \\therefore"}/>
        <Latex position={[0, 20]} tex={"\\color{white}{\\color{#2ba756}NaCl}\\text{ is our limiting reactant}"}/>
      </Layout>
      <Layout position={[230,0]} scale={1.2} opacity={0}>
        <Layout opacity={1} scale={0.33}>
          <Txt scale={2} fill={"white"} position={[-350,5]}>10 mol</Txt>
          <Latex tex={"\\color{#2ba756}NaCl"} height={90}/>
        </Layout>
        <Latex position={[240, 0]} tex={'\\color{white}*\\frac{\\text{1mol }\\color{#996370}CaBr_2}{\\text{2mol }\\color{#2ba756}NaCl} = \\text{5mol } \\color{#996370}CaBr_2'} height={60} opacity={1}/>

      </Layout>
    </Layout>
  </>
  );

  yield* chain(
    delay(1.2, smorePic().opacity(1,1)),
    waitFor(1.4),
    smorePic().position([-470,0], 1),
    smoreMult().opacity(1,0.5).wait(0.5),
    equals().opacity(1,0.2),
    waitFor(0.35),
    chain(...ingredientsA().children().map((a,b)=>a.opacity(1,0.5).wait([0.75][b]))),
    ingredientsA().position([0,-130],0.8),
    chain(...ingredientsB().children().map((a,b)=>a.opacity(1,0.5).wait([1.7][b]))),
    all(conversion().scale(0.3,0.5), conversion().position([-700,-460],0.5)),
    tween(0.25, value=>{
      divider1().points([[-1000,-300],[600*value-1000,-300]]);
      divider2().points([[-400,-700],[-400,1400*value-700]]);
    }),
    waitFor(0.75),
    chain(...quantity().children().map((a,b)=>a.opacity(1,1).wait([0.5,0.25,0.5,0.87][b]))),
    waitFor(2),
    tween(3,value=>{
      production().children().map((a,b)=>a.opacity(Math.floor(value*smoreCount)==b?(value*smoreCount)%1:Math.sign(value*smoreCount-b)*2-1));
      //@ts-ignore
      quantity().children().map((a,b)=>a.children()[0].text([24,36,60,60][b] - Math.floor(value*smoreCount)*[1,2,4,1][b]))
    }),
    waitFor(0.5),
    all(
      production().opacity(0, 0.3),
      delay(0.3, tween(0, value=>{
        //@ts-ignore
        quantity().children().map((a,b)=>a.children()[0].text([24,36,60,60][b]))
      }))
    ),
    waitFor(1.44),
    tween(0.5,value=>{
      let str = "Stoichiometry"
      stoichHeader().text(str.slice(0, value*str.length))
    }),
    waitFor(0.9),
    all(
      conversion().scale(0.7,0.5), conversion().position([280,0],0.5),
      quantity().position([0,-100],0.5),
      delay(0.2,divider1().position([0,-550],0.3)),
    ),
    waitFor(0.3),

    tween(1,value=>{
      //@ts-ignore
      ingredientsA().children()[0].children()[0].text("24")
    }),
    tween(1.7,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        b<=Math.floor(value*4)||b==1?a.children()[0].text([24,48,96,24][b].toString()).fill(['white','red','red','white'][b]):a.children()[0].text([1,2,4,1][b].toString())
      })
    }),
    tween(0.88, value=>{smoreMult().text("48"); stoichCommenter().text("Not enough marshmallows or graham crackers")}),
    tween(0.12,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        a.children()[0].text([1,2,4,1][b].toString()).fill("white")
      })
      smoreMult().text("2")
      stoichCommenter().text("")
    }),

    tween(1.5,value=>{
      //@ts-ignore
      ingredientsB().children()[0].children()[0].text("60")
    }),
    tween(0.7,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        b<=Math.floor(value*4)||b==2?a.children()[0].text([15,30,60,15][b].toString()):a.children()[0].text([1,2,4,1][b].toString())
      })
    }),
    tween(1, value=>smoreMult().text("30")),
    tween(0.33,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        a.children()[0].text([1,2,4,1][b].toString())
      })
      smoreMult().text("2")
    }),
    tween(1.5,value=>{
      //@ts-ignore
      ingredientsA().children()[1].children()[0].text("36").fill("white")
    }),

    tween(0.7,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        b<=Math.floor(value*4)||b==1?a.children()[0].text([18,36,72,18][b].toString()).fill(['white','white','red','white'][b]):a.children()[0].text([1,2,4,1][b].toString())
      })
    }),
    tween(1, value=>{smoreMult().text("36");stoichCommenter().text("Not enough graham crackers")}),
    tween(0,value=>{
      ingredientsA().children().concat(ingredientsB().children()).map((a,b)=>{
        //@ts-ignore
        a.children()[0].text([1,2,4,1][b].toString()).fill("white")
      })
      smoreMult().text("2")
      stoichCommenter().text("")
    }),
    all(
      conversion().scale(0.3,0.5), conversion().position([-700,-460],0.5),
      quantity().position([0,0],0.5),
      delay(0.2,divider1().position([0,0],0.3))
    ),
    waitFor(4.1),
    all(production().opacity(1,0.5), delay(0.5, tween(0.1,value=>{
      //@ts-ignore
      quantity().children().map((a,b)=>a.children()[0].text([9,6,0,45][b].toString()))
    }))),
    waitFor(1.5),
    all(
      stoichCommenter().text('*15',0).wait(0.4).to("",0),
      chain(...dxGraham().children().map((a,b)=>a.opacity(1,0.5).wait([1.55,0.85,0.83,0.65][b])))
    ),
    waitFor(0.8),
    dxGraham().opacity(0,0.5),
    waitFor(1),
    waitFor(2.79),
    limitEx().opacity(1,1.3),
    waitFor(0.9),
    all(
      quantity().opacity(0,0.4),
      conversion().opacity(0, 0.4),
      limitEx().opacity(0,0.4),
      production().position([-300,100],0.4),
      stoichHeader().position([0,-400],0.4),
      stoichCommenter().fill("white",0.2),
      stoichCommenter().position([0,-250], 0.2),
      tween(0.4, value=>{
        divider1().points([[-1000,-300],[600*(1-value)-1000,-300]]);
        divider2().points([[-400,-700],[-400,1400*(1-value)-700]]);
      })
    ),
    waitFor(1.2),
    stoichCommenter().text(
      `The practice of finding out what we are limited by, `
    ,1),
    waitFor(0.8),
    stoichCommenter().text(
      `The practice of calculating what we are limited by,
      and how much we can use`
    ,1.5).to(`The practice of calculating what we are limited by,
    and how much we can use to make the most of one quantity`,1.45),
    all(stoichHeader().fill('lime',1),stoichCommenter().fill('lime',1)),
    waitFor(1.3),
    all(
      stoichHeader().scale(5, 4),
      stoichHeader().position([0,-300],4),
      production().opacity(0, 2),
      stoichCommenter().scale(1.7,4),
      stoichCommenter().position([0,100],4),
      stoichCommenter().text(
      `The practice of finding out how much we need, 
      and how much we can get`
    ,4)),
    waitFor(0.5),
    all(
      stoichHeader().opacity(0, 1),
      stoichCommenter().opacity(0,1)
    ),
    waitFor(2.2),
    waitFor(3.1),
    chemicalOutline().opacity(1,1.5),
    chain(...chemicalEquation1().children().map(a=>a.opacity(1,0.3))),
    all(
      chemicalOutline().position([0,-490], 0.3),
      chemicalOutline().width('100%', 0.3),
      chemicalEquation1().position([0, -490], 0.3),
      stoichCommenter().text('',0.3),
      stoichCommenter().scale(1.2, 0.3),
      stoichCommenter().fill('white', 0.3),
      stoichCommenter().position([0,400],0.3)
    ),
    all(
      ...chemicalQuantities().children().map((a,b)=>delay([0.97,2.5,6.2,7.03][b],chain(
        a.opacity(1,0.2),all(
          //@ts-ignore
          a.position([[-630,-275],[-290,-275],[480,-275],[140,-275]][b],0.3),
          a.scale(0.4,0.3),
        )
      )))
    ),
    waitFor(0.3),
    all(tween(0.4, value=>{
      chemicalQuantities().children().map((a,b)=>{
        //@ts-ignore
        a.children()[0].text(a.children()[0].text().match(/\d+|\?/) + ' (mol)'.slice(value*6))
        a.children()[0].position([[-350,-350,-320,-330][b] + 110*value, 5])
      })
    }), stoichCommenter().opacity(1, 0.3)),
    waitFor(0.5),
    stoichCommenter().text("Pause & try to solve this problem", 0.3),
    waitFor(1.7),
    all(
      stoichCommenter().text("", 0.3),
      divider1().position([0,0],0.1),
      tween(0.3, value=>divider1().points([[-1000,-330],[2000*value-1000,-330]]))
    ),
    waitFor(2.1),
    stoichCommenter().text("Treat the equation like a smore",1.5).to("",0.2),
    waitFor(0.27),
    all(...dimensionalAnalysis().children().map((a,b)=>delay([1,2.7,3.7,5.6,7.35,9.33, 15, 16.33][b], a.opacity(1,0.5)))),
    
    waitFor(6)
  );
});
