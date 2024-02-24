import React, { useState } from 'react';
import './AdminPanel.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCvafXWcjByZCRfX9G4hfU1RZ0vU84sKFM",
    authDomain: "thedivinecaster-877cc.firebaseapp.com",
    projectId: "thedivinecaster-877cc",
    storageBucket: "thedivinecaster-877cc.appspot.com",
    messagingSenderId: "293556884205",
    appId: "1:293556884205:web:927adc85f21909063572e4",
    measurementId: "G-194H2WERR6"
};

firebase.initializeApp(firebaseConfig);

const AdminPanel = () => {

  // const assinement
  const socialMediaData = JSON.parse(sessionStorage.getItem('socialMediaData'));
  const instagram = socialMediaData.instagram;
  const youtubetdc = socialMediaData.youtubetdc;
  const youtubedg = socialMediaData.youtubedg;
  const telegram = socialMediaData.telegram;
  const whatsapp = socialMediaData.whatsapp;
  const threads = socialMediaData.threads;
  const x = socialMediaData.x;
  const linkedin = socialMediaData.linkedin;
  const facebook = socialMediaData.facebook;
  const discord = socialMediaData.discord;
  const controller = JSON.parse(sessionStorage.getItem('controllerData'));

  //Controller
  const [selectedController_RUN, setSelectedController_RUN] = useState(controller.run);
  const [selectedController_DURATION, setSelectedController_DURATION] = useState(controller.duration);

  //instagram data in Firestore
  const [ inputInstagramFollowers, setInputInstagramFollowers] = useState(instagram.followers);
  const [inputInstagramPosts, setInputInstagramPosts] = useState(instagram.posts);
  const [inputInstagramFollowing, setInputInstagramFollowing] = useState(instagram.following);

  // youtube TDC data in firestore
  const [inputYoutubeTDCSubscribers, setInputYoutubeTDCSubscribers] = useState(youtubetdc.subscribers);
  const [inputYoutubeTDCVideos, setInputYoutubeTDCVideos] = useState(youtubetdc.videos);
  const [inputYoutubeTDCLikes, setInputYoutubeTDCLikes] = useState(youtubetdc.likes);
  const [inputYoutubeTDCViews, setInputYoutubeTDCViews] = useState(youtubetdc.views);

  // youtube DG data in firestore
  const [inputYoutubeDGSubscribers, setInputYoutubeDGSubscribers] = useState(youtubedg.subscribers);
  const [inputYoutubeDGVideos, setInputYoutubeDGVideos] = useState(youtubedg.videos);
  const [inputYoutubeDGLikes, setInputYoutubeDGLikes] = useState(youtubedg.likes);
  const [inputYoutubeDGViews, setInputYoutubeDGViews] = useState(youtubedg.views);

  //X data in firestore
  const [inputXFollowers, setInputXFollowers] = useState(x.followers);
  const [inputXTweets, setInputXTweets] = useState(x.tweets);
  const [inputXRetweets, setInputXRetweets] = useState(x.retweets);

  //telegram data in firestore
  const [inputTelegramSubscribers, setInputTelegramSubscribers] = useState(telegram.subscribers);
  const [inputTelegramAdmin, setInputTelegramAdmin] = useState(telegram.admin);
  const [inputTelegramChannels, setInputTelegramChannels] = useState(telegram.channels);
  const [inputTelegramMessages, setInputTelegramMessages] = useState(telegram.messages);

  // threads data in firestore
  const [inputThreadsThreads, setInputThreadsThreads] = useState(threads.threads);
  const [inputThreadsReplies, setInputThreadsReplies] = useState(threads.replies);
  const [inputThreadsReposts, setInputThreadsReposts] = useState(threads.reposts);

  // whatsapp data in firestore
  const [inputWhatsAppFollowers, setInputWhatsAppFollowers] = useState(whatsapp.followers);
  const [inputWhatsAppPosts, setInputWhatsAppPosts] = useState(whatsapp.posts);
  const [inputWhatsAppLikes, setInputWhatsAppLikes] = useState(whatsapp.likes);

  //discord data in firestore
  const [inputDiscordFriends, setInputDiscordFriends] = useState(discord.friends);
  const [inputDiscordChannels, setInputDiscordChannels] = useState(discord.channels);
  const [inputDiscordLikes, setInputDiscordLikes] = useState(discord.likes);


  //facebook data in firestore
  const [inputFacebookFriends, setInputFacebookFriends] = useState(facebook.friends);
  const [inputFacebookLikes, setInputFacebookLikes] = useState(facebook.likes);
  const [inputFacebookPosts, setInputFacebookPosts] = useState(facebook.posts);

  //linkedin data in firestore
  const [inputLinkedInConnections, setInputLinkedInConnections] = useState(linkedin.connections);
  const [inputLinkedInLikes, setInputLinkedInLikes] = useState(linkedin.likes);
  const [inputLinkedInPosts, setInputLinkedInPosts] = useState(linkedin.posts);
  

  // Function to update data in Firestore
  const updateFirestoreControllerData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const controllerRef = db.collection('controller').doc('status');

    try {
      await controllerRef.update({ run: selectedController_RUN });
      await controllerRef.update({ duration: selectedController_DURATION });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleControllerUpdate = async () => {
    console.log('calling updatefirestoredata RUN');
    updateFirestoreControllerData();
  };
  const handleControllerReset = async () => {
    setSelectedController_RUN(controller.run);
    setSelectedController_DURATION(controller.duration);
  };

  // Function to update Instagram data in Firestore
  const updateFirestoreInstagramData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('instagram');

    try {
      await dataRef.update({ followers: inputInstagramFollowers });
      await dataRef.update({ posts: inputInstagramPosts });
      await dataRef.update({ following: inputInstagramFollowing });
      // await dataRef.update({ following: selectedController_DURATION });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleInstagramDataUpdate = async () => {
    console.log('calling updatefirestoredata Instagram');
    updateFirestoreInstagramData();
  };
  const handleInstagramDataReset = async () => {
    setInputInstagramFollowers(instagram.followers);
    setInputInstagramPosts(instagram.posts);
    setInputInstagramFollowing(instagram.following);
  };

  //function to update youtube TDC data in firestore
  const updateFirestoreYoutubeTDCData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('youtubetdc');

    try {
      await dataRef.update({ subscribers: inputYoutubeTDCSubscribers });
      await dataRef.update({ videos: inputYoutubeTDCVideos });
      await dataRef.update({ likes: inputYoutubeTDCLikes });
      await dataRef.update({ views: inputYoutubeTDCViews });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleYoutubeTDCDataUpdate = async () => {
    console.log('calling updatefirestoredata YoutubeTDC');
    updateFirestoreYoutubeTDCData();
  };
  const handleYoutubeTDCDataReset = async () => {
    setInputYoutubeTDCSubscribers(youtubetdc.subscribers);
    setInputYoutubeTDCVideos(youtubetdc.videos);
    setInputYoutubeTDCLikes(youtubetdc.likes);
    setInputYoutubeTDCViews(youtubetdc.views);
  };

  //function to update youtube DG data in firestore
  const updateFirestoreYoutubeDGData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('youtubedg');

    try {
      await dataRef.update({ subscribers: inputYoutubeDGSubscribers });
      await dataRef.update({ videos: inputYoutubeDGVideos });
      await dataRef.update({ likes: inputYoutubeDGLikes });
      await dataRef.update({ views: inputYoutubeDGViews });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleYoutubeDGDataUpdate = async () => {
    console.log('calling updatefirestoredata YoutubeDG');
    updateFirestoreYoutubeDGData();
  };
  const handleYoutubeDGDataReset = async () => {
    setInputYoutubeDGSubscribers(youtubedg.subscribers);
    setInputYoutubeDGVideos(youtubedg.videos);
    setInputYoutubeDGLikes(youtubedg.likes);
    setInputYoutubeDGViews(youtubedg.views);
  };

  //function to update threads data in firestore
  const updateFirestoreThreadsData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('threads');

    try {
      await dataRef.update({ threads: inputThreadsThreads });
      await dataRef.update({ replies: inputThreadsReplies });
      await dataRef.update({ reposts: inputThreadsReposts });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleThreadsDataUpdate = async () => {
    console.log('calling updatefirestoredata Threads');
    updateFirestoreThreadsData();
  };
  const handleThreadsDataReset = async () => {
    setInputThreadsThreads(threads.threads);
    setInputThreadsReplies(threads.replies);
    setInputThreadsReposts(threads.reposts);
  };

  //function to update X data in firestore
  const updateFirestoreXData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('x');

    try {
      await dataRef.update({ followers: inputXFollowers });
      await dataRef.update({ tweets: inputXTweets });
      await dataRef.update({ retweets: inputXRetweets });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleXDataUpdate = async () => {
    console.log('calling updatefirestoredata X');
    updateFirestoreXData();
  }
  const handleXDataReset = async () => {
    setInputXFollowers(x.followers);
    setInputXTweets(x.tweets);
    setInputXRetweets(x.retweets);
  }

  //telegram data in firestore
  const updateFirestoreTelegramData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('telegram');

    try {
      await dataRef.update({ subscribers: inputTelegramSubscribers });
      await dataRef.update({ admin: inputTelegramAdmin });
      await dataRef.update({ channels: inputTelegramChannels });
      await dataRef.update({ messages: inputTelegramMessages });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleTelegramDataUpdate = async () => {
    console.log('calling updatefirestoredata Telegram');
    updateFirestoreTelegramData();
  }
  const handleTelegramDataReset = async () => {
    setInputTelegramSubscribers(telegram.subscribers);
    setInputTelegramAdmin(telegram.admin);
    setInputTelegramChannels(telegram.channels);
    setInputTelegramMessages(telegram.messages);
  }

  //whatsapp data in firestore
  const updateFirestoreWhatsAppData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('whatsapp');

    try {
      await dataRef.update({ followers: inputWhatsAppFollowers });
      await dataRef.update({ posts: inputWhatsAppPosts });
      await dataRef.update({ likes: inputWhatsAppLikes });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleWhatsAppDataUpdate = async () => {
    console.log('calling updatefirestoredata WhatsApp');
    updateFirestoreWhatsAppData();
  }
  const handleWhatsAppDataReset = async () => {
    setInputWhatsAppFollowers(whatsapp.followers);
    setInputWhatsAppPosts(whatsapp.posts);
    setInputWhatsAppLikes(whatsapp.likes);
  }

  //linkedin data in firestore
  const updateFirestoreLinkedInData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('linkedin');

    try {
      await dataRef.update({ connections: inputLinkedInConnections });
      await dataRef.update({ likes: inputLinkedInLikes });
      await dataRef.update({ posts: inputLinkedInPosts });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleLinkedInDataUpdate = async () => {
    console.log('calling updatefirestoredata LinkedIn');
    updateFirestoreLinkedInData();
  }
  const handleLinkedInDataReset = async () => {
    setInputLinkedInConnections(linkedin.connections);
    setInputLinkedInLikes(linkedin.likes);
    setInputLinkedInPosts(linkedin.posts);
  }

  //facebook data in firestore
  const updateFirestoreFacebookData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('facebook');

    try {
      await dataRef.update({ friends: inputFacebookFriends });
      await dataRef.update({ likes: inputFacebookLikes });
      await dataRef.update({ posts: inputFacebookPosts });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleFacebookDataUpdate = async () => {
    console.log('calling updatefirestoredata Facebook');
    updateFirestoreFacebookData();
  }
  const handleFacebookDataReset = async () => {
    setInputFacebookFriends(facebook.friends);
    setInputFacebookLikes(facebook.likes);
    setInputFacebookPosts(facebook.posts);
  }

  //discord data in firestore
  const updateFirestoreDiscordData = async () => {
    console.log('firestore has been called');
    const db = firebase.firestore();
    const dataRef = db.collection('data').doc('discord');

    try {
      await dataRef.update({ friends: inputDiscordFriends });
      await dataRef.update({ channels: inputDiscordChannels });
      await dataRef.update({ likes: inputDiscordLikes });
      console.log('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };
  const handleDiscordDataUpdate = async () => {
    console.log('calling updatefirestoredata Discord');
    updateFirestoreDiscordData();
  }
  const handleDiscordDataReset = async () => {
    setInputDiscordFriends(discord.friends);
    setInputDiscordChannels(discord.channels);
    setInputDiscordLikes(discord.likes);
  }


  return (
    <div className="admin-panel-container">
      <h1 className="admin-panel-title">Admin Panel</h1>

      <div className="admin-controller-panel">

        <div className="admin-controller-row">
          <div className="admin-controller-name">Controller</div>
          <div className="admin-controller-fields">

            <div className="field-item">
              <h6 className="field-name">Server</h6>
              <select className="controller-value" value={selectedController_RUN} onChange={(e) => setSelectedController_RUN(e.target.value)}>
                <option value="404">404</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
              </select>
            </div>
              
            <div className="field-item">
              <h6 className="field-name">Duration</h6>
              <input type="number" className="field-value" value={selectedController_DURATION} onChange={(e) => setSelectedController_DURATION(e.target.value)}/>
            </div>

          </div>
          <div className="admin-controller-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleControllerUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleControllerReset}>Reset</button>
          </div>  
        </div>
      </div>
      
      <div className="admin-data-panel">
        
        {/* Youtube TDC */}
        <div className="social-media-row">
          <div className="social-media-name">YouTubeTDC</div>
          <div className="social-media-fields">
            <div className="field-item">
              <h6 className="field-name">Subscribers</h6>
              <input type="text" className="field-value" value={inputYoutubeTDCSubscribers} onChange={(e) => setInputYoutubeTDCSubscribers(e.target.value)}/>
            </div>
            <div className="field-item">
              <h6 className="field-name">Videos</h6>
              <input type="text" className="field-value" value={inputYoutubeTDCVideos} onChange={(e) => setInputYoutubeTDCVideos(e.target.value)} />
            </div>
            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputYoutubeTDCLikes} onChange={(e) => setInputYoutubeTDCLikes(e.target.value)}/>
            </div>
            <div className="field-item">
              <h6 className="field-name">Views</h6>
              <input type="text" className="field-value" value={inputYoutubeTDCViews} onChange={(e) => setInputYoutubeTDCViews(e.target.value)}/>
            </div>
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleYoutubeTDCDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleYoutubeTDCDataReset}>Reset</button>
          </div>
        </div>

        {/* Youtube DG */}
        <div className="social-media-row">
          <div className="social-media-name">YouTubeDG</div>
          <div className="social-media-fields">
            <div className="field-item">
              <h6 className="field-name">Subscribers</h6>
              <input type="text" className="field-value" value={inputYoutubeDGSubscribers} onChange={(e) => setInputYoutubeDGSubscribers(e.target.value)}/>
            </div>
            <div className="field-item">
              <h6 className="field-name">Videos</h6>
              <input type="text" className="field-value" value={inputYoutubeDGVideos} onChange={(e) => setInputYoutubeDGVideos(e.target.value)} />
            </div>
            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputYoutubeDGLikes} onChange={(e) => setInputYoutubeDGLikes(e.target.value)}/>
            </div>
            <div className="field-item">
              <h6 className="field-name">Views</h6>
              <input type="text" className="field-value" value={inputYoutubeDGViews} onChange={(e) => setInputYoutubeDGViews(e.target.value)}/>
            </div>
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleYoutubeDGDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleYoutubeDGDataReset}>Reset</button>
          </div>
        </div>

        {/* Instagram */}
        <div className="social-media-row">
          <div className="social-media-name">Instagram</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Posts</h6>
              <input type="text" className="field-value" value={inputInstagramPosts} onChange={(e) => setInputInstagramPosts(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Followers</h6>
              <input type="text" className="field-value" value={inputInstagramFollowers} onChange ={(e) => setInputInstagramFollowers(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Following</h6>
              <input type="text" className="field-value" value={inputInstagramFollowing} onChange ={(e) => setInputInstagramFollowing(e.target.value)}/>
            </div>
            
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleInstagramDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleInstagramDataReset}>Reset</button>
          </div>
        </div>

        {/* Threads */}
        <div className="social-media-row">
          <div className="social-media-name">Threads</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Threads</h6>
              <input type="text" className="field-value" value={inputThreadsThreads} onChange={(e) => setInputThreadsThreads(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Replies</h6>
              <input type="text" className="field-value" value={inputThreadsReplies} onChange={(e) => setInputThreadsReplies(e.target.value)}/>
            </div>

            <div className="f ield-item">
              <h6 className="field-name">Reposts</h6>
              <input type="text" className="field-value" value={inputThreadsReposts} onChange={(e) => setInputThreadsReposts(e.target.value)}/>
            </div>

          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleThreadsDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleThreadsDataReset}>Reset</button>
          </div>
        </div>

        {/* X */}
        <div className="social-media-row">
          <div className="social-media-name">X</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Followers</h6>
              <input type="text" className="field-value" value={inputXFollowers} onChange={(e) => setInputXFollowers(e.target.value) }/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Tweets</h6>
              <input type="text" className="field-value" value={inputXTweets} onChange={(e) => setInputXFollowers(e.target.value) }/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Retweets</h6>
              <input type="text" className="field-value" value={inputXRetweets} onChange={(e) => setInputXFollowers(e.target.value) }/>
            </div>

          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleXDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleXDataReset}>Reset</button>
          </div>
        </div>

        {/* Telegram */}
        <div className="social-media-row">
          <div className="social-media-name">Telegram</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Subscribers</h6>
              <input type="text" className="field-value" value={inputTelegramSubscribers} onChange={(e) => setInputTelegramSubscribers(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Admin</h6>
              <input type="text" className="field-value" value={inputTelegramAdmin} onChange={(e) => setInputTelegramAdmin(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Channels</h6>
              <input type="text" className="field-value" value={inputTelegramChannels} onChange={(e) => setInputTelegramChannels(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Messages</h6>
              <input type="text" className="field-value" value={inputTelegramMessages} onChange={(e) => setInputTelegramMessages(e.target.value)}/>
            </div>

          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleTelegramDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleTelegramDataReset}>Reset</button>
          </div>
        </div>

        {/* WhatsApp */}
        <div className="social-media-row">
          <div className="social-media-name">WhatsApp</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Followers</h6>
              <input type="text" className="field-value" value={inputWhatsAppFollowers} onChange={(e) => setInputWhatsAppFollowers(e.target.value)}/>
            </div>
            
            <div className="field-item">
              <h6 className="field-name">Posts</h6>
              <input type="text" className="field-value" value={inputWhatsAppPosts} onChange={(e) => setInputWhatsAppPosts(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputWhatsAppLikes} onChange={(e) => setInputWhatsAppLikes(e.target.value)}/>
            </div>

          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleWhatsAppDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleWhatsAppDataReset}>Reset</button>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="social-media-row">
          <div className="social-media-name">LinkedIn</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Connections</h6>
              <input type="text" className="field-value" value={inputLinkedInConnections} onChange={(e) => setInputLinkedInConnections(e.target.value)}/>
            </div>
            
            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputLinkedInLikes} onChange={(e) => setInputLinkedInLikes(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Posts</h6>
              <input type="text" className="field-value" value={inputLinkedInPosts} onChange={(e) => setInputLinkedInPosts(e.target.value)}/>
            </div>
            
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleLinkedInDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleLinkedInDataReset}>Reset</button>
          </div>
        </div>

        {/* Facebook */}
        <div className="social-media-row">
          <div className="social-media-name">Facebook</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Friends</h6>
              <input type="text" className="field-value" value={inputFacebookFriends} onChange={(e) => setInputFacebookFriends(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputFacebookLikes} onChange={(e) => setInputFacebookLikes(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Posts</h6>
              <input type="text" className="field-value" value={inputFacebookPosts} onChange={(e) => setInputFacebookPosts(e.target.value)}/>
            </div>
            
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleFacebookDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleFacebookDataReset}>Reset</button>
          </div>
        </div>

        {/* Discord */}
        <div className="social-media-row">
          <div className="social-media-name">Discord</div>
          <div className="social-media-fields">

            <div className="field-item">
              <h6 className="field-name">Friends</h6>
              <input type="text" className="field-value" value={inputDiscordFriends} onChange={(e) => setInputDiscordFriends(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Channels</h6>
              <input type="text" className="field-value" value={inputDiscordChannels} onChange={(e) => setInputDiscordChannels(e.target.value)}/>
            </div>

            <div className="field-item">
              <h6 className="field-name">Likes</h6>
              <input type="text" className="field-value" value={inputDiscordLikes} onChange={(e) => setInputDiscordLikes(e.target.value)}/>
            </div>
            
          </div>
          <div className="social-media-update-reset-button">
            <button className="btn btn-success admin-panel-btn" onClick={handleDiscordDataUpdate}>Update</button>
            <button className="btn btn-danger admin-panel-btn" onClick={handleDiscordDataReset}>Reset</button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default AdminPanel