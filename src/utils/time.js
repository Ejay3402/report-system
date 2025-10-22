//ulits for timestaps and relative times

export const nowISO = () => new Date().toISOString();

export const simpleRelativeDay = (iso) => {
    if (!iso) return `Unknown`;
    const created = new Date(iso);
    if (isNaN(created.getTime())) return `Unknown`;

    const today = new Date();

    created.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    const diffms = today.getTime() - created.getTime();
    const diffDays = Math.floor(diffms / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return `Toaday`;
    if (diffDays === 1) return `Yesterday`;
    return `${diffDays} days ago`;
}



/* 
export const relativeTime = (iso) => {
    console.log(`relativeTime`,iso);
    const diff = Date.now() - new Date(iso).getTime();
    const sec = Math.floor( diff / 1000);
    if (sec < 6) return `Just now`;
    if (sec < 60) return `${sec} sec ${sec > 1 ? `s` : ``} age-`;

    const min = Math.floor(sec / 60);
    if (min < 60) return `${min}${min > 1 ? `m` : ``} age`;

    const hr = Math.floor(min / 60);
    if (hr < 24) return `${hr}${hr > 1 ? `hr` : ``} age`;

    const days = Math.floor(hr / 24);
    return `${days}${days > 1 ? `days` : `day`} age`;
}

export const todaysKey = (iso) => {
    console.log(`todaysKey` ,iso);
    const d = new Date(iso);
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
} */

    // ...existing code...
// utils for timestamps and relative times
/* 
export const nowISO = () => new Date().toISOString();

const toDate = (input) => {
    if (input instanceof Date) return input;
    if (input === undefined || input === null || input === '') return new Date();
    const d = (typeof input === 'number') ? new Date(input) : new Date(String(input));
    return isNaN(d.getTime()) ? null : d;
}

export const relativeTime = (iso) => {
    const d = toDate(iso);
    if (!d) return 'Invalid date';

    const diff = Date.now() - d.getTime();
    const past = diff >= 0;
    const sec = Math.floor(Math.abs(diff) / 1000);
    if (sec < 6) return past ? 'Just now' : 'In a few seconds';
    if (sec < 60) return past ? `${sec}s ago` : `in ${sec}s`;

    const min = Math.floor(sec / 60);
    if (min < 60) return past ? `${min}m ago` : `in ${min}m`;

    const hr = Math.floor(min / 60);
    if (hr < 24) return past ? `${hr}h ago` : `in ${hr}h`;

    const days = Math.floor(hr / 24);
    return past ? `${days}d ago` : `in ${days}d`;
}

export const todaysKey = (iso) => {
    const d = toDate(iso) || new Date();
    return d.toISOString().slice(0, 10); // yyyy-mm-dd
} 
// ...existing code...

// ...existing code...
// utils for timestamps and relative times

export const nowISO = () => new Date().toISOString();

const toDate = (input) => {
    try {
        if (input instanceof Date) return input;
        if (input === undefined || input === null || input === '') return new Date();
        if (typeof input === 'number') return new Date(input);
        if (typeof input === 'string') {
            const d = new Date(input);
            return isNaN(d.getTime()) ? null : d;
        }
        // handle objects like { seconds, nanoseconds } or firebase Timestamp
        if (typeof input === 'object') {
            if (typeof input.toDate === 'function') {
                const d = input.toDate();
                return d instanceof Date && !isNaN(d.getTime()) ? d : null;
            }
            if (typeof input.toISOString === 'function') {
                const d = new Date(input.toISOString());
                return isNaN(d.getTime()) ? null : d;
            }
            // try numeric-like objects
            if (typeof input.valueOf === 'function') {
                const maybe = new Date(input.valueOf());
                return isNaN(maybe.getTime()) ? null : maybe;
            }
        }
        return null;
    } catch (e) {
        return null;
    }
}

export const relativeTime = (iso) => {
    const d = toDate(iso);
    if (!d) return 'Invalid date';

    const t = d.getTime();
    if (isNaN(t)) return 'Invalid date';

    const diff = Date.now() - t;
    const past = diff >= 0;
    const sec = Math.floor(Math.abs(diff) / 1000);

    if (sec < 6) return past ? 'Just now' : 'In a few seconds';
    if (sec < 60) return past ? `${sec}s ago` : `in ${sec}s`;

    const min = Math.floor(sec / 60);
    if (min < 60) return past ? `${min}m ago` : `in ${min}m`;

    const hr = Math.floor(min / 60);
    if (hr < 24) return past ? `${hr}h ago` : `in ${hr}h`;

    const days = Math.floor(hr / 24);
    return past ? `${days}d ago` : `in ${days}d`;
}

export const todaysKey = (iso) => {
    const d = toDate(iso) || new Date();
    try {
        return d.toISOString().slice(0, 10); // yyyy-mm-dd
    } catch (_) {
        return new Date().toISOString().slice(0, 10);
    }
}
// ...existing code...
*/