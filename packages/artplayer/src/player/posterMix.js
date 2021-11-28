import { def, setStyle } from '../utils';

export default function posterMix(art, player) {
    const {
        option,
        template: { $poster },
    } = art;

    def(player, 'poster', {
        get: () => option.poster,
        set(url) {
            option.poster = url;
            setStyle($poster, 'backgroundImage', `url(${url})`);
        },
    });
}