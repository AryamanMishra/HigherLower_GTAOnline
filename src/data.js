
function importAll(r) {
    let images = {};
    r.keys().map(item => { return images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./images', false, /\.jpeg/));


const weapons_data = [
    {
        'name' : 'Knuckle Dusters',
        'img' : '',
        'cost' : '$7,500'
    },
    {
        'name' : 'Broken Bottle',
        'img' : '',
        'cost' : 'FREE'
    },
    {
        'name' : 'Switchblade',
        'img' : '',
        'cost' : '$1,950'
    },
    {
        'name' : 'Antique Cavalry Dagger',
        'img' : '',
        'cost' : '$2,000'
    },
    {
        'name' : 'Knife',
        'img' : '',
        'cost' : '$400'
    },
    {
        'name' : 'Machete',
        'img' : '',
        'cost' : '$8,900'
    },
    {
        'name' : 'Hatchet',
        'img' : '',
        'cost' : '$750'
    },
    {
        'name' : 'Battle Axe',
        'img' : '',
        'cost' : '$9,500'
    },
    {
        'name' : 'Flashlight',
        'img' : '',
        'cost' : '$5,750'
    },
    {
        'name' : 'Hammer',
        'img' : '',
        'cost' : '$500'
    },
    {
        'name' : 'Pool Cue',
        'img' : '',
        'cost' : '$6,250'
    },
    {
        'name' : 'Nightstick',
        'img' : '',
        'cost' : '$400'
    },
    {
        'name' : 'Pipe Wrench',
        'img' : '',
        'cost' : '$7,150'
    },
    {
        'name' : 'Stun Gun',
        'img' : '',
        'cost' : '$375,000'
    },
    {
        'name' : 'Flare Gun',
        'img' : '',
        'cost' : '$3,750'
    },
    {
        'name' : 'SNS Pistol',
        'img' : '',
        'cost' : '$2,750'
    },
    {
        'name' : 'SNS Pistol Mk II',
        'img' : '',
        'cost' : '$79,575'
    },
    {
        'name' : 'Vintage Pistol',
        'img' : '',
        'cost' : '$3,450'
    },
    {
        'name' : 'Combat Pistol',
        'img' : '',
        'cost' : '$3,200'
    },
    {
        'name' : 'Pistol',
        'img' : '',
        'cost' : '$2,500'
    },
    {
        'name' : 'Pistol Mk II',
        'img' : '',
        'cost' : '$73,750'
    },
    {
        'name' : 'AP Pistol',
        'img' : '',
        'cost' : '$5,000'
    },
    {
        'name' : 'Heavy Pistol',
        'img' : '',
        'cost' : '$3,750'
    },
    {
        'name' : 'Pistol .50',
        'img' : '',
        'cost' : '$3,900'
    },
    {
        'name' : 'Marksman Pistol',
        'img' : '',
        'cost' : '$4,350'
    },
    {
        'name' : 'Heavy Revolver',
        'img' : '',
        'cost' : '$5,900'
    },
    {
        'name' : 'Heavy Revolver Mk II',
        'img' : '',
        'cost' : '$99,000'
    },
    {
        'name' : 'Up-n-Atomizer',
        'img' : '',
        'cost' : '$399,000'
    },
    {
        'name' : 'Ceramic Pistol',
        'img' : '',
        'cost' : '$20,000'
    },
    {
        'name' : 'Micro SMG',
        'img' : '',
        'cost' : '$3,750'
    },
    {
        'name' : 'Mini SMG',
        'img' : '',
        'cost' : '$8,900'
    },
    {
        'name' : 'SMG',
        'img' : '',
        'cost' : '$7,500'
    },
    {
        'name' : 'SMG Mk II',
        'img' : '',
        'cost' : '$85,500'
    },
    {
        'name' : 'Assault SMG',
        'img' : '',
        'cost' : '$12,550'
    },
    {
        'name' : 'Combat PDW',
        'img' : '',
        'cost' : '$11,750'
    },
    {
        'name' : 'Machine Pistol',
        'img' : '',
        'cost' : '$6,250'
    },
    {
        'name' : 'Gusenberg Sweeper',
        'img' : '',
        'cost' : '$14,600'
    },
    {
        'name' : 'MG',
        'img' : '',
        'cost' : '$13,500'
    },
    {
        'name' : 'Combat MG',
        'img' : '',
        'cost' : '$14,800'
    },
    {
        'name' : 'Combat MG Mk II',
        'img' : '',
        'cost' : '$119,000'
    },
    {
        'name' : 'Unholy Hellbringer',
        'img' : '',
        'cost' : '$449,000'
    },
    {
        'name' : 'Sawed-Off Shotgun',
        'img' : '',
        'cost' : 'FREE'
    },
    {
        'name' : 'Pump Shotgun',
        'img' : '',
        'cost' : '$3,500'
    },
    {
        'name' : 'Pump Shotgun Mk II',
        'img' : '',
        'cost' : '$82,500'
    },
    {
        'name' : 'Bullpup Shotgun',
        'img' : '',
        'cost' : '$8,000'
    },
    {
        'name' : 'Sweeper Shotgun',
        'img' : '',
        'cost' : '$14,900'
    },
    {
        'name' : 'Heavy Shotgun',
        'img' : '',
        'cost' : '$13,550'
    },
    {
        'name' : 'Assault Shotgun',
        'img' : '',
        'cost' : '$10,000'
    },
    {
        'name' : 'Double Barrel Shotgun',
        'img' : '',
        'cost' : '$15,450'
    },
    {
        'name' : 'Combat Shotgun',
        'img' : '',
        'cost' : '$295,000'
    },
    {
        'name' : 'Compact Rifle',
        'img' : '',
        'cost' : '$14,650'
    },
    {
        'name' : 'Advanced Rifle',
        'img' : '',
        'cost' : '$14,250'
    },
    {
        'name' : 'Bullpup Rifle',
        'img' : '',
        'cost' : '$14,500'
    },
    {
        'name' : 'Bullpup Rifle Mk II',
        'img' : '',
        'cost' : '$105,750'
    },
    {
        'name' : 'Assault Rifle',
        'img' : '',
        'cost' : '$8,550'
    },
    {
        'name' : 'Assault Rifle Mk II',
        'img' : '',
        'cost' : '$98,750'
    },
    {
        'name' : 'Carbine Rifle',
        'img' : '',
        'cost' : '$13,000'
    },
    {
        'name' : 'Carbine Rifle Mk II',
        'img' : '',
        'cost' : '$107,500'
    },
    {
        'name' : 'Heavy Rifle',
        'img' : '',
        'cost' : '$450,000'
    },
    {
        'name' : 'Military Rifle',
        'img' : '',
        'cost' : '$397,500'
    },
    {
        'name' : 'Service Carbine',
        'img' : '',
        'cost' : '$370,000'
    },
    {
        'name' : 'Special Carbine',
        'img' : '',
        'cost' : '$14,750'
    },
    {
        'name' : 'Special Carbine Mk II',
        'img' : '',
        'cost' : '$135,000'
    },
    {
        'name' : 'Marksman Rifle',
        'img' : '',
        'cost' : '$15,750'
    },
    {
        'name' : 'Marksman Rifle Mk II',
        'img' : '',
        'cost' : '$149,000'
    },
    {
        'name' : 'Sniper Rifle',
        'img' : '',
        'cost' : '$20,000'
    },
    {
        'name' : 'Heavy Sniper',
        'img' : '',
        'cost' : '$38,150'
    },
    {
        'name' : 'Heavy Sniper Mk II',
        'img' : '',
        'cost' : '$165,375'
    },
    {
        'name' : 'Precision Rifle',
        'img' : '',
        'cost' : '$450,000'
    },
    {
        'name' : 'Compact Grenade Launcher',
        'img' : '',
        'cost' : '$45,000'
    },
    {
        'name' : 'Grenade Launcher',
        'img' : '',
        'cost' : '$32,400'
    },
    {
        'name' : 'RPG',
        'img' : '',
        'cost' : '$26,250'
    },
    {
        'name' : 'Homing Launcher',
        'img' : '',
        'cost' : '$75,000'
    },
    {
        'name' : 'Minigun',
        'img' : '',
        'cost' : '$50,000'
    },
    {
        'name' : 'Railgun',
        'img' : '',
        'cost' : '$730,000'
    },
    {
        'name' : 'Widowmaker',
        'img' : '',
        'cost' : '$499,000'
    },
    {
        'name' : 'Compact EMP Launcher',
        'img' : '',
        'cost' : '$525,000'
    },
    {
        'name' : 'Jerry Can',
        'img' : '',
        'cost' : '$100'
    },
    {
        'name' : 'Tear Gas',
        'img' : '',
        'cost' : '$150'
    },
    {
        'name' : 'Pipe Bomb',
        'img' : '',
        'cost' : '$500'
    },
    {
        'name' : 'Grenade',
        'img' : '',
        'cost' : '$250'
    },
    {
        'name' : 'Sticky Bomb',
        'img' : '',
        'cost' : '$600'
    },
    {
        'name' : 'Proximity Mine',
        'img' : '',
        'cost' : '$1,000'
    },
]


const assignImageFromName = (weapon)=> {
    let name = weapon['name']
    name = name.replace(/ /g, '');
    name += '-GTAO.jpeg'
    weapon['img'] = images[name] 
}

for (let i=0;i<weapons_data.length;i++) {
    assignImageFromName(weapons_data[i])
}


export {weapons_data}