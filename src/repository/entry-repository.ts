import firebase from "firebase/app"

export class EntryRepository {

    public async getEntries() {
        const snapshots = await firebase.firestore().collection('entries').orderBy('position').get()
        return snapshots.docs.map(doc => doc.data())
    }

}