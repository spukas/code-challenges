export const bump = x => ([...x].filter(v => v === 'n').length <= 15 ? 'Woohoo!' : 'Car Dead');

/*
    * Other solutions
    
    const bump = x => (x.split('n').length > 16 ? 'Car Dead' : 'Woohoo!');
    const bump = x => x.replace(/_/g,'').length>15 ? 'Car Dead' : 'Woohoo!';
*/
