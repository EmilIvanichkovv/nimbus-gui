import { IReceiver, Protocols, createFullNode, createLightNode, waitForRemotePeer } from '@waku/sdk'

import { HMACDRBG } from '@stablelib/hmac-drbg'
import { randomBytes } from '@stablelib/random'
import { SHA256, hash } from '@stablelib/sha256'
import { equals as uint8ArrayEquals } from 'uint8arrays/equals'

import * as utils from '@waku/utils/bytes'

import protobuf from 'protobufjs'

import { createEncoder, createDecoder } from '@waku/sdk'

import {
  NoiseHandshakeDecoder,
  NoiseHandshakeEncoder,
  NoiseSecureTransferDecoder,
  NoiseSecureTransferEncoder,
} from '@waku/noise'
// import { generateX25519KeyPair } from '@waku/noise'
import * as x25519 from '@stablelib/x25519'
import { Handshake } from '@waku/noise'
// import { MessageNametagBufferSize, MessageNametagLength } from "@waku/noise/dist/messagenametag";
import { NoiseHandshakePatterns } from '@waku/noise'
import { NoisePublicKey } from '@waku/noise'
import { QR } from '@waku/noise'
import { concat as uint8ArrayConcat } from 'uint8arrays/concat'

import * as noise from '@waku/noise'

import { readFileSync, writeFileSync } from 'fs'

const messageNametagLength = 16

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executeReadStepWithNextMessage(iterator: any) {
    // TODO: create test unit for this function
    let stopLoop = false;

    while (!stopLoop) {
        // eslint-disable-next-line no-useless-catch
        try {
            const item = await iterator.next();
            if (!item.value) {
                throw Error("Received no message");
            }
            console.log("Received message");
            console.log(item.value.payloadV2);

            return item.value.payloadV2;
        }
        catch (err) {
                throw err;
        }
    }
    throw new Error("could not obtain next message");
}

// Create and start a Light Node
async function startNode() {
  const node = await createLightNode({
    defaultBootstrap: true,
  })
  await node.start()
  await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])
  const bobStaticKey = noise.generateX25519KeyPair()
  //   const bobStaticKey = generateX25519KeyPair()
  //   const bobEphemeralKey = generateX25519KeyPair()
  //   const r = randomBytes(32, rng)
  //   const bobCommittedStaticKey = h

  const pairingObj = new noise.WakuPairing(
    node.lightPush,
    node.filter,
    bobStaticKey,
    new noise.ResponderParameters(),
  )
  //   console.log(pairingObj)

  const pInfo = pairingObj.getPairingInfo()
  console.log(utils.bytesToHex(pInfo.qrMessageNameTag))
  writeFileSync(
    '/home/emilivanichkov/code/repos/metacraft-labs/status-im/nwaku/qrMessageNametag.txt',
    utils.bytesToHex(pInfo.qrMessageNameTag),
  )
  console.log(pInfo.qrCode)
  writeFileSync(
    '/home/emilivanichkov/code/repos/metacraft-labs/status-im/nwaku/qr.txt',
    pInfo.qrCode,
  )

  const pExecute = pairingObj.execute(12000000) // timeout after 2m
  const [encoder, decoder] = await pExecute

  decoder.contentTopic = 'waku-noise-sessions/0.1/wakunoise/1/sessions_shard-10/real/proto'
  console.log(decoder)
  // Create a message structure using Protobuf
  const ChatMessage = new protobuf.Type('WakuMessage')
    .add(new protobuf.Field('timestamp', 1, 'uint64'))
    .add(new protobuf.Field('sender', 2, 'string'))
    .add(new protobuf.Field('message', 3, 'string'))

  // Create the callback function
  const callback = (wakuMessage: any) => {
    console.log('wakuMessage received?')
    // console.log(wakuMessage)
    // // Check if there is a payload on the message
    // if (!wakuMessage.payload) return
    // // Render the messageObj as desired in your application
    // const messageObj = ChatMessage.decode(wakuMessage.payload)
    // console.log(messageObj)
  }
  //   const subscription = await node.filter.createSubscription()
  //   await subscription.subscribe([decoder], callback)
  //   console.log('subscription created')
  //   console.log(subscription)
  const subscriptionIterator = await node.filter.toSubscriptionIterator(decoder)
  console.log('subscriptionIterator created')
  console.log(subscriptionIterator.iterator)

  await delay(10000)

  const x = await executeReadStepWithNextMessage(subscriptionIterator.iterator)
  console.log(x)
  //   await node.filter.subscribe([decoder], callback)

  //   const rng = new HMACDRBG()
  //   const node = await createLightNode({ defaultBootstrap: true })
  //   await node.start()
  //   await waitForRemotePeer(node, [Protocols.Filter, Protocols.LightPush])

  //   // Create a message structure using Protobuf
  //   const ChatMessage = new protobuf.Type('WakuMessage')
  //     .add(new protobuf.Field('timestamp', 1, 'uint64'))
  //     .add(new protobuf.Field('sender', 2, 'string'))
  //     .add(new protobuf.Field('message', 3, 'string'))

  //   // const hash = SHA256;

  //   const hsPattern = NoiseHandshakePatterns.WakuPairing

  //   // Bob static/ephemeral key initialization and commitment
  //   const bobStaticKey = generateX25519KeyPair()
  //   const bobEphemeralKey = generateX25519KeyPair()
  //   const r = randomBytes(32, rng)
  //   const bobCommittedStaticKey = hash(uint8ArrayConcat([bobStaticKey.publicKey, r]))

  //   // Content topic information
  //   const applicationName = 'waku-noise-sessions'
  //   const applicationVersion = '0.1'
  //   const shardId = '10'
  //   const qrMessageNameTag = randomBytes(messageNametagLength, rng)
  //   console.log('QR Message Name Tag: ' + utils.bytesToHex(qrMessageNameTag))
  //   // Out-of-band Communication

  //   // Bob prepares the QR and sends it out-of-band to Alice
  //   const qr = new QR(
  //     applicationName,
  //     applicationVersion,
  //     shardId,
  //     bobEphemeralKey.publicKey,
  //     bobCommittedStaticKey,
  //   )
  //   console.log('QR: ' + qr.toString())

  //   // We set the contentTopic from the content topic parameters exchanged in the QR
  //   const contentTopic =
  //     '/' +
  //     applicationName +
  //     '/' +
  //     applicationVersion +
  //     '/wakunoise/1/sessions_shard-' +
  //     shardId +
  //     '/proto'

  //   // Create a message encoder and decoder
  //   //   const encoder = createEncoder({ contentTopic })
  //   //   const decoder = new NoiseHandshakeDecoder(contentTopic)

  //   // Pre-handshake message
  //   // <- eB {H(sB||r), contentTopicParams, messageNametag}
  //   const preMessagePKs = [NoisePublicKey.fromPublicKey(bobEphemeralKey.publicKey)]

  //   const bobHS = new Handshake({
  //     hsPattern,
  //     ephemeralKey: bobEphemeralKey,
  //     staticKey: bobStaticKey,
  //     prologue: qr.toByteArray(),
  //     preMessagePKs,
  //   })

  //   // Create the callback function
  //   const callback = (wakuMessage: any) => {
  //     // Check if there is a payload on the message
  //     if (!wakuMessage.payload) return
  //     // Render the messageObj as desired in your application
  //     const messageObj = ChatMessage.decode(wakuMessage.payload)
  //     console.log(messageObj)
  //   }

  //   // Create a Filter subscription
  //   const subscription = await node.filter.createSubscription()

  //   // Subscribe to content topics and process new messages
  //   // We decode the WakuMessage from the ProtoBuffer
  //   let decoder = new NoiseHandshakeDecoder(contentTopic)
  //   await subscription.subscribe([decoder], callback)
  //   //   let wakuMsgProto = await decoder.fromWireToProtoObj(wakuMsgBytes!)
  //   //   let v2Msg = await decoder.fromProtoObj(PUBSUB_TOPIC, wakuMsgProto!)
}

startNode()
