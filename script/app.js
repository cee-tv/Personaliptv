const channels = {
    tv5_hd: {
    name: "TV5 HD",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd",
    number: 1,
    drmConfig: {
        clearKeys: {
            "2615129ef2c846a9bbd43a641c7303ef": "07c7f996b1734ea288641a68e1cfdc4d"
        
},

rptv_hd: {
    name: "RPTV HD",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd",
    number: 2,
    drmConfig: {
        clearKeys: {
            "1917f4caf2364e6d9b1507326a85ead6": "a1340a251a5aa63a9b0ea5d9d7f67595"
        
},

true_fm_tv: {
    name: "True FM TV",
    url: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd",
    number: 3,
    drmConfig: {
        clearKeys: {
            "0559c95496d44fadb94105b9176c3579": "40d8bb2a46ffd03540e0c6210ece57ce"
        
},

ptv_4: {
    name: "PTV 4",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd",
    number: 4,
    drmConfig: {
        clearKeys: {
            "71a130a851b9484bb47141c8966fb4a3": "ad1f003b4f0b31b75ea4593844435600"
        
},

ibc_13: {
    name: "IBC 13",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd",
    number: 5,
    drmConfig: {
        clearKeys: {
            "04e292bc99bd4ccba89e778651914254": "ff0a62bdf8920ce453fe680330b563a5"
        
},

a2z: {
    name: "A2Z",
    url: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd",
    number: 6,
    drmConfig: {
        clearKeys: {
            "f703e4c8ec9041eeb5028ab4248fa094": "c22f2162e176eee6273a5d0b68d19530"
        
},

one_ph: {
    name: "One PH",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd",
    number: 7,
    drmConfig: {
        clearKeys: {
            "92834ab4a7e1499b90886c5d49220e46": "a7108d9a6cfcc1b7939eb111daf09ab3"
        
},

one_news: {
    name: "One News",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd",
    number: 8,
    drmConfig: {
        clearKeys: {
            "d39eb201ae494a0b98583df4d110e8dd": "6797066880d344422abd3f5eda41f45f"
        
},

buko: {
    name: "Buko",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd",
    number: 9,
    drmConfig: {
        clearKeys: {
            "d273c085f2ab4a248e7bfc375229007d": "7932354c3a84f7fc1b80efa6bcea0615"
        
},

sari_sari: {
    name: "Sari-Sari",
    url: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd",
    number: 10,
    drmConfig: {
        clearKeys: {
            "0a7ab3612f434335aa6e895016d8cd2d": "b21654621230ae21714a5cab52daeb9d"
        
},

pba_rush: {
    name: "PBA Rush",
    url: "https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd",
    number: 11,
    drmConfig: {
        clearKeys: {
            "76dc29dd87a244aeab9e8b7c5da1e5f3": "95b2f2ffd4e14073620506213b62ac82"
        
},

one_sports_hd: {
    name: "One Sports HD",
    url: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd",
    number: 12,
    drmConfig: {
        clearKeys: {
            "53c3bf2eba574f639aa21f2d4409ff11": "3de28411cf08a64ea935b9578f6d0edd"
        
},

one_sports_plus: {
    name: "One Sports+",
    url: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd",
    number: 13,
    drmConfig: {
        clearKeys: {
            "322d06e9326f4753a7ec0908030c13d8": "1e3e0ca32d421fbfec86feced0efefda"
        
},

uaap_varsity_channel: {
    name: "UAAP Varsity Channel",
    url: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd",
    number: 14,
    drmConfig: {
        clearKeys: {
            "95588338ee37423e99358a6d431324b9": "6e0f50a12f36599a55073868f814e81e"
        
},

mptv: {
    name: "MPTV",
    url: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd",
    number: 15,
    drmConfig: {
        clearKeys: {
            "6aab8f40536f4ea98e7c97b8f3aa7d4e": "139aa5a55ade471faaddacc4f4de8807"
        
}
        }
    }
};

let shakaPlayer = null;
let isPoweredOn = true;
let currentVolume = 1;
let channelInputTimeout = null;
let currentChannelInput = "";
let currentChannelIndex = 0;
let retryCount = 0;
const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

// Initialize Shaka Player
function initApp() {
    shaka.polyfill.installAll();
    
    if (shaka.Player.isBrowserSupported()) {
        initPlayer();
    } else {
        console.error('Browser not supported!');
    }
}

function initPlayer() {
    const video = document.getElementById('video-player');
    shakaPlayer = new shaka.Player(video);

    shakaPlayer.addEventListener('error', onErrorEvent);
    
    // Configure for low latency streaming
    shakaPlayer.configure({
        streaming: {
            bufferingGoal: 10,
            rebufferingGoal: 2,
            bufferBehind: 30
        }
    });
}

function onErrorEvent(event) {
    // Handle both event object and direct error cases
    const error = event.detail || event;
    console.error('Error:', error);
    retryPlayback();
}

function retryPlayback() {
    if (retryCount < MAX_RETRIES) {
        retryCount++;
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = `Connection error. Retrying... (${retryCount}/${MAX_RETRIES})`;
        errorMessage.style.display = 'block';
        
        setTimeout(() => {
            const currentChannelId = Object.keys(channels)[currentChannelIndex];
            loadChannel(currentChannelId);
        }, RETRY_DELAY);
    } else {
        handlePlaybackError();
        retryCount = 0;
    }
}

// Add new helper function to handle channel loading
function loadChannel(channelId) {
    const channel = channels[channelId];
    try {
        if (shakaPlayer) {
            shakaPlayer.unload();
            
            if (channel.drmConfig) {
                shakaPlayer.configure({
                    drm: {
                        clearKeys: channel.drmConfig.clearKeys
                    }
                });
            }
            
            shakaPlayer.load(channel.url)
                .then(() => {
                    const video = document.getElementById('video-player');
                    video.volume = currentVolume;
                    const playPromise = video.play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            console.log("Autoplay prevented:", error);
                            // Show play button or handle autoplay prevention
                        });
                    }
                    document.getElementById('error-message').style.display = 'none';
                    retryCount = 0;
                })
                .catch((error) => {
                    console.error('Load error:', error);
                    onErrorEvent(error);
                });
        }
    } catch (error) {
        console.error('Load channel error:', error);
        onErrorEvent(error);
    }
}

function handlePlaybackError() {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Channel failed to load. Please try another channel.';
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

// Update changeChannel function to use loadChannel
function changeChannel(channelId) {
    if (!isPoweredOn) return;
    
    currentChannelIndex = Object.keys(channels).indexOf(channelId);
    
    const video = document.getElementById('video-player');
    const channelInfo = document.getElementById('channel-info');
    const errorMessage = document.getElementById('error-message');
    const channel = channels[channelId];
    
    errorMessage.style.display = 'none';
    channelInfo.textContent = `${channel.number}. ${channel.name}`;
    channelInfo.style.display = 'block';
    document.title = `${channel.name} - Türk TV`;
    
    video.style.display = 'block';
    
    loadChannel(channelId);
    
    setTimeout(() => {
        channelInfo.style.display = 'none';
    }, 3000);
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', () => {
    initApp();
    // Add a small delay to ensure Shaka Player is fully initialized
    setTimeout(() => {
        const video = document.getElementById('video-player');
        video.volume = currentVolume;
        changeChannel('trt1');
        // Add click event listener for mobile devices
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            }
        });
    }, 1000);
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (shakaPlayer) {
        shakaPlayer.destroy();
    }
});

function showVolumeIndicator(volume) {
    const indicator = document.getElementById('volume-indicator');
    indicator.textContent = `Volume: ${Math.round(volume * 100)}%`;
    indicator.style.display = 'block';
    
    setTimeout(() => {
        indicator.style.display = 'none';
    }, 2000);
}

function adjustVolume(change) {
    if (!isPoweredOn) return;
    
    const video = document.getElementById('video-player');
    currentVolume = Math.max(0, Math.min(1, currentVolume + change));
    video.volume = currentVolume;
    showVolumeIndicator(currentVolume);
}

function inputChannel(number) {
    if (!isPoweredOn) return;
    
    currentChannelInput += number;
    
    const channelInput = document.getElementById('channel-input');
    channelInput.textContent = currentChannelInput;
    channelInput.style.display = 'block';
    
    if (channelInputTimeout) {
        clearTimeout(channelInputTimeout);
    }
    
    channelInputTimeout = setTimeout(() => {
        channelInput.style.display = 'none';
        
        const channelEntry = Object.entries(channels).find(([_, channel]) => 
            channel.number === parseInt(currentChannelInput)
        );
        
        if (channelEntry) {
            changeChannel(channelEntry[0]);
        }
        
        currentChannelInput = "";
    }, 1000);
}

function togglePower() {
    const screen = document.getElementById('tv-screen');
    const video = document.getElementById('video-player');
    const powerBtn = document.querySelector('.remote-power');
    
    isPoweredOn = !isPoweredOn;
    
    if (!isPoweredOn) {
        screen.classList.add('off');
        powerBtn.classList.add('off');
        
        if (shakaPlayer) {
            shakaPlayer.unload();
        }
        video.style.display = 'none';
    } else {
        screen.classList.remove('off');
        powerBtn.classList.remove('off');
        video.style.display = 'block';
        setTimeout(() => changeChannel('trt1'), 100); // Auto play TRT 1 when powered on
    }
}

function changeChannelRelative(direction) {
    if (!isPoweredOn) return;
    
    // Get current channel number
    const currentChannel = Object.values(channels).find((channel, index) => index === currentChannelIndex);
    let nextChannelNumber = currentChannel.number + direction;
    
    // Handle wraparound
    if (nextChannelNumber < 1) nextChannelNumber = 15;
    if (nextChannelNumber > 15) nextChannelNumber = 1;
    
    // Find channel by number
    const nextChannel = Object.entries(channels).find(([_, channel]) => 
        channel.number === nextChannelNumber
    );
    
    if (nextChannel) {
        changeChannel(nextChannel[0]);
    }
}

document.addEventListener('keydown', (e) => {
    if (!isPoweredOn && e.key !== 'p') return;
    
    switch(e.key.toLowerCase()) {
        case 'p':
            togglePower();
            break;
        case 'arrowup':
            changeChannelRelative(1);
            break;
        case 'arrowdown':
            changeChannelRelative(-1);
            break;
        case 'arrowleft':
            adjustVolume(-0.1);
            break;
        case 'arrowright':
            adjustVolume(0.1);
            break;
        case 'm':
            toggleMute();
            break;
        case 'l':
            toggleInterface('channels');
            break;
        case 'r':
            toggleInterface('remote');
            break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            inputChannel(parseInt(e.key));
            break;
    }
});

let isMuted = false;
let previousVolume = 1;

function toggleMute() {
    if (!isPoweredOn) return;
    
    const video = document.getElementById('video-player');
    if (isMuted) {
        video.volume = previousVolume;
        currentVolume = previousVolume;
        isMuted = false;
        showVolumeIndicator(currentVolume);
    } else {
        previousVolume = currentVolume;
        video.volume = 0;
        currentVolume = 0;
        isMuted = true;
        showVolumeIndicator(0);
    }
}

document.getElementById('toggle-menu').addEventListener('click', function() {
    const menuOverlay = document.getElementById('menu-overlay');
    menuOverlay.style.display = menuOverlay.style.display === 'none' ? 'block' : 'none';
});

function toggleInterface(type) {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const menuOverlay = document.getElementById('menu-overlay');
    const keyboardOverlay = document.getElementById('keyboard-overlay');

    // Hide menu overlay
    menuOverlay.style.display = 'none';

    // Hide all interfaces first
    channelList.classList.remove('visible');
    channelList.style.display = 'none';
    remoteControl.classList.add('hidden');
    keyboardOverlay.style.display = 'none';

    // Show the requested interface
    switch(type) {
        case 'remote':
            remoteControl.classList.remove('hidden');
            break;
        case 'channels':
            channelList.style.display = 'block';
            setTimeout(() => channelList.classList.add('visible'), 10);
            break;
        case 'keyboard':
            keyboardOverlay.style.display = 'block';
            break;
    }
}

function hideInterface(type) {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const keyboardOverlay = document.getElementById('keyboard-overlay');

    switch(type) {
        case 'remote':
            remoteControl.classList.add('hidden');
            break;
        case 'channels':
            channelList.classList.remove('visible');
            setTimeout(() => {
                channelList.style.display = 'none';
            }, 300);
            break;
        case 'keyboard':
            keyboardOverlay.style.display = 'none';
            break;
    }
}

// Update click event listener to include keyboard overlay
document.addEventListener('click', function(event) {
    const channelList = document.getElementById('channel-list');
    const remoteControl = document.getElementById('remote-container');
    const menuOverlay = document.getElementById('menu-overlay');
    const keyboardOverlay = document.getElementById('keyboard-overlay');
    const toggleMenuBtn = document.getElementById('toggle-menu');

    if (channelList.style.display !== 'none' && 
        !channelList.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('channels');
    }

    if (!remoteControl.classList.contains('hidden') && 
        !remoteControl.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('remote');
    }

    if (menuOverlay.style.display !== 'none' && 
        !menuOverlay.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        menuOverlay.style.display = 'none';
    }

    if (keyboardOverlay.style.display !== 'none' && 
        !keyboardOverlay.contains(event.target) && 
        !toggleMenuBtn.contains(event.target)) {
        hideInterface('keyboard');
    }
});

// Add click stop propagation for keyboard overlay
document.getElementById('keyboard-overlay').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Prevent clicks inside elements from bubbling up and triggering the hide
document.getElementById('channel-list').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('remote-container').addEventListener('click', function(event) {
    event.stopPropagation();
});

document.getElementById('menu-overlay').addEventListener('click', function(event) {
    event.stopPropagation();
});

// Add network status monitoring
window.addEventListener('online', () => {
    if (isPoweredOn) {
        const currentChannelId = Object.keys(channels)[currentChannelIndex];
        changeChannel(currentChannelId); // Retry current channel when connection is restored
    }
});
